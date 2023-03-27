import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import randomColor from "randomcolor";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useBudgets } from "../../Context/BudgetContext";
import "./ExpenseChart.css"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)
const ExpenseChart = ({label, amount, color, budgetID}) => {

  const {budgets} = useBudgets();

  var checkEmpty = false;
  
  if(color.length === 0){
    checkEmpty = true;
    label.push("No Expense");
    amount.push(parseFloat(budgets[budgetID].max));
    color.push(randomColor());
  }

  const data = {
    labels : label,
    datasets : [{
      label : 'poll',
      data : amount,
      backgroundColor : color,
      borderColor : color,
      hoverOffset : 7,
      radius : "90%"
    }]
  }

  const options = {
    plugins: {
      legend : {
        display : checkEmpty,
        position : "bottom",
        
      }
    }
  }

  return (
    <div 
      className="chart">
      <Doughnut
        data = {data}
        options = {options}
      />
    </div>
  )
}

export default ExpenseChart