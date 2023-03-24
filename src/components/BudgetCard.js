import { currencyFormatter } from "../Utils.js";
import { useEffect } from "react";
import Progress_bar from './Progress_bar.js';

function BudgetCard({id, name, amount, max, clickExpense, setClickExpense, viewExpense, setViewExpense, setBudgetId}) {

  const handleViewClick = ()=> {
    setViewExpense(!viewExpense);
    setBudgetId(id);
  }

  const handleClickExpense = ()=>{
    setClickExpense(!clickExpense);
    setBudgetId(id);
  }

  function handleProgress(amount, max){
    const prec = (amount / max)*100;
    return prec.toFixed(2);
  }

  function handleProgressColor(amount, max){

    const color = "#ADD8E6";
    const precentage = handleProgress(amount, max);

    if(precentage >= 60 && precentage < 90){
      return "orange";
    }
    else if(precentage >= 90){
      return "red";
    }
    return color;
  }

  return (
    <div className='budget-card' style={{backgroundColor : (amount > max ? "#FFCCCC" : "#FFFFFF")}}>
        <div className='card-title'>
          <div className='title-name-card'>{name}</div>
          <div className='amount-max-card'>
            {currencyFormatter.format(amount)} 
            <span 
              style={{
                marginBlockStart : "1rem", 
                marginLeft : "0.4rem", 
                fontSize : "1.18rem", 
                color : "gray"
                }}>
              / {currencyFormatter.format(max)}
            </span>
          </div>
        </div>
        <div className='progress-bar'>
        <Progress_bar bgcolor = {handleProgressColor(amount, max)} progress = {handleProgress(amount, max)} height = {30} />
        </div>
        <div className='stack'>
          <input
            className='card-addexpense'
            type = 'button'
            onClick={() => handleClickExpense()}
            value = "Add Expense"
          />
          <input 
            className='card-viewexpense'
            type = 'button'
            onClick={() => handleViewClick()}
            value = "View Expense"
          />
        </div>
    </div>
  )
}

export default BudgetCard