import { useState } from "react";
import { useBudgets } from "../../Context/BudgetContext";
import "./DropdownViewExpense.css"


const DropdownViewExpense = ({key, budgetID}) => {

    const {expenses, setExpense, getBudgetExpenses, deleteExpenses} = useBudgets();
    const newExpense = getBudgetExpenses(parseInt(budgetID));
    const [value, setValue] = useState("");
    const [ID, setId] = useState(0);
    const [show, setShow] = useState(false);

    const handleClick = (id)=>{
        console.log(id)
        setId(id)
        setShow(true);
    }

    // console.log(expenses);
    const handleChange = (e) => {
        e.preventDefault();
        const newExpense = expenses.map( ex =>{

            const id = ex.budgetID;
            if(parseInt(ex.id) === parseInt(ID)){
                return {...ex, amount : value };
            }
            
            return ex;
        });

        console.log(newExpense)

        setExpense(newExpense);
    }

    const handleRemove = (e)=> {

        e.preventDefault();
        deleteExpenses(ID);
    }

    return (
    <>
        <div style = {{ marginLeft : "40px" }}>
            <select className="dropdown-box-view" placeholder="Select Budget" onChange={(e) => handleClick(e.target.value)}>
                <option className="dropdown-items-view">--Select Expense--</option>
                {newExpense.map((expense) => {
                    
                    return(
                        <option className="dropdown-items-view" value = {expense.id}>{expense.description} </option>
                    )
                })}
            </select>
            {show && <>
                <div>
                    <form onSubmit={(e) => handleChange(e)}>
                        <input 
                            className="input-field" 
                            type = "number" 
                            onChange={(e)=>setValue(e.target.value)}
                            placeholder="Change expense"
                        />
                        <button className="submit-change">Change</button>
                    </form>
                </div>
                <div className="OR-class">OR</div>
                <div>
                    <input 
                        className="button-field" 
                        type="button"
                        onClick={(e) => handleRemove(e)} 
                        value="Remove"
                    />
                </div>
            </>}
        </div>    
    </>
)
}

export default DropdownViewExpense