import { TfiClose } from "react-icons/tfi"
import { useState } from "react";
import { useBudgets } from "../../Context/BudgetContext";
import DropdownAddExpense from "../Dropdown/DropdownAddExpense.js";
import "./AddExpenseModal.css";


export default function AddExpenseModal({show, setShow, id}) {

    const {addExpense} = useBudgets();

    const [descriptionText, setDescriptionText] = useState('');
    const [amountText, setAmountText] = useState('');
    const [budgetID, setBudgetID] = useState(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        const description = descriptionText;
        const amount = amountText;
        addExpense(description, amount, budgetID);

        setShow(!show);
    }
   
  return (
    <div className="modal-add-expense" style={{ height: "400px" }}>
        <div className="modal-header-add-expense">
            <div className="modal-title-add-expense">Add Expense</div>
            <TfiClose style= {{fontSize : "1.5rem"}} onClick={() => setShow(!show)}/>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-body-add-expense" style={{fontSize : "1.5rem"}}>
                <label className="modal-body-heading1" style = {{paddingLeft : "1rem"}}>Description</label>
                    <input 
                        autoFocus
                        type="text" 
                        required
                        value = {descriptionText}
                        onChange= {(e) => setDescriptionText(e.target.value)}
                        style = {{ 
                            height : "2rem",
                            width : "25rem",
                            margin : "1rem"
                        }}
                    />
                <label className="modal-body-heading2" style = {{paddingLeft : "1rem"}}>Amount</label>
                    <input 
                        autoFocus
                        type = "number"
                        required
                        value = {amountText}
                        onChange= {(e) => setAmountText(e.target.value)}
                        style = {{
                            height : "2rem",
                            width : "25rem",
                            margin : "1rem"
                        }}
                    />
                <div>
                    <DropdownAddExpense setBudgetID = {setBudgetID} id ={id} />
                </div>
            </div>
            <div 
                style={{
                    position : "static",
                    display : "flex", 
                    justifyContent : "flex-end",
                    marginBottom : "auto"
                }}>
                <button className="modal-submit-add-expense" type="submit">Add</button>
            </div>
        </form>
    </div>

  )
}
