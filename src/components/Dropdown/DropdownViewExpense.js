import { useState } from "react";
import { useBudgets } from "../../Context/BudgetContext";
import "./DropdownViewExpense.css"


const DropdownViewExpense = ({key, budgetID, color}) => {

    const {expenses, setExpense, getBudgetExpenses, deleteExpenses} = useBudgets();
    const newExpense = getBudgetExpenses(parseInt(budgetID));
    const [value, setValue] = useState("");
    const [selectedID, setSelectedId] = useState(null);

    const handleClick = (id)=>{
        if(selectedID !== null){
            setSelectedId(null);
            return;
        }
        
        setSelectedId(id)
    }

    const handleChange = (e) => {
        e.preventDefault();
        const newExpense = expenses.map( ex =>{

            const id = ex.budgetID;
            if(parseInt(ex.id) === parseInt(selectedID)){
                return {...ex, amount : value };
            }
            
            return ex;
        });

        if(selectedID !== null){
            setSelectedId(null);
        }

        setExpense(newExpense);
    }

    var index = 0;

    const handleDelete = (e)=> {

        e.preventDefault();

        if(selectedID !== null){
            setSelectedId(null);
        }

        deleteExpenses(selectedID);
    }

    return (
    <>
        <div style = {{ marginLeft : "40px" }}>
            <div className="wrapper">
                <div className="accordian">
                    {
                        newExpense.map(ex =>{
                            return(
                                <div className="outer-label">
                                    <div className="label" onClick={() => handleClick(ex.id)}>
                                        <div className="label-name">{ex.description}</div>
                                        <div 
                                            className="class-palatte"
                                            style = {{ backgroundColor : color[index++]}}
                                        />
                                        <span className="add-sign"> {selectedID === ex.id ? "-" : "+"} </span>
                                    </div>
                                    {   selectedID === ex.id ? 
                                        (<div className="flex-box">
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
                                            <div>
                                                <input 
                                                    className="button-field" 
                                                    type="button"
                                                    onClick={(e) => handleDelete(e)} 
                                                    value="Delete"
                                                />
                                            </div>
                                        </div>) : <div></div>
                                    }
                                </div>
                        )})
                    }
                </div>

            </div>
            
        </div>    
    </>
)
}

export default DropdownViewExpense