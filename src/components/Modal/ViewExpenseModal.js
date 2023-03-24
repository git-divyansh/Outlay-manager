import { TfiClose } from "react-icons/tfi"
import { useBudgets } from "../../Context/BudgetContext";
import { useState } from "react";
import ExpenseChart from "../Charts/ExpenseChart.js";
import DropdownViewExpense from "../Dropdown/DropdownViewExpense.js";
import "./ViewExpenseModal.css";

const ViewExpenseModal = ({show, setShow, budgetID}) => {
    
    const {expenses, budgets} = useBudgets();
    // const [color, setColor] = useState([]);

    const label = [];
    const amount = [];
    

    expenses.forEach(element => {
    
        if(parseInt(element.budgetId) === parseInt(budgetID)){
          label.push(element.description);
          amount.push(parseInt(element.amount));
        }
    });

    if(amount.length === 0){
        label.push("No Expense");
        amount.push(parseFloat(budgets[budgetID].max));
    }

    return (
        <div className="modal" style={{ height: "400px" }}>
            <div className="modal-header">
                <div className="modal-title">View Expense</div>
                <TfiClose style= {{fontSize : "1.5rem"}} onClick={() => setShow(!show)}/>
            </div>
            <div className="modal-body" style={{fontSize : "1.5rem"}}>
                <ExpenseChart label = {label} amount = {amount} budgetID = {budgetID}/>
                <DropdownViewExpense budgetID={budgetID}/>
            </div>
        </div>
    
      )
}

export default ViewExpenseModal