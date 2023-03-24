import { useEffect, useState } from "react";
import { useBudgets } from "../../Context/BudgetContext";
import "./DropdownAddExpense.css"


const DropdownAddExpense = ({setBudgetID, id}) => {


    const {budgets} = useBudgets();
    console.log(id);
    return (
    <>
        <select className="dropdown-box-add" placeholder="Select Budget" onChange={(e) => setBudgetID(e.target.value)}>
            <option className="dropdown-items-add" value = {id}>{budgets[id].name} </option>           
            {budgets.map((budget) => {
                if(budget.id !== id){
                return(
                    <option className="dropdown-items-add" value = {budget.id}>{budget.name} </option>
                )
                }
            })}
        </select>
    </>
)
}

export default DropdownAddExpense