

import { TfiClose } from "react-icons/tfi"
import { useBudgets } from "../../Context/BudgetContext";
import ExpenseChart from "../Charts/ExpenseChart.js";
import DropdownViewExpense from "../Dropdown/DropdownViewExpense.js";
import "./ViewExpenseModal.css";

const ViewExpenseModal = ({show, setShow, budgetID}) => {
    
    const {expenses} = useBudgets();

    console.log(expenses)

    const label = [];
    const amount = [];
    const color = [];
    

    expenses.forEach(element => {
    
        if(parseInt(element.budgetId) === parseInt(budgetID)){
          label.push(element.description);
          amount.push(parseInt(element.amount));
          color.push(element.color);
        }
    });

    return (
        <div className="modal">
            <div className="modal-header">
                <div className="modal-title">View Expense</div>
                <TfiClose className="TfiClose-view" onClick={() => setShow(!show)}/>
            </div>
            <div className="modal-body" style={{fontSize : "1.5rem"}}>
                <ExpenseChart label = {label} amount = {amount} budgetID = {budgetID} color = {color}/>
                <DropdownViewExpense budgetID={budgetID} color = {color}/>
            </div>
        </div>
    
      )
}

export default ViewExpenseModal