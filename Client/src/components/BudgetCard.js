import { currencyFormatter } from "./Utils.js";
import { useEffect } from "react";
import Progress_bar from './Progress_bar.js';
import { useState } from "react";

function BudgetCard({id, name, amount, max, clickExpense, setClickExpense, viewExpense, setViewExpense, setBudgetId}) {

  const [prec, setPrec] = useState((amount / max)*100);

  const handleViewClick = ()=> {
    setViewExpense(!viewExpense);
    setBudgetId(id);
  }

  const handleClickExpense = ()=>{
    setClickExpense(!clickExpense);
    setBudgetId(id);
  }

  useEffect(()=>{
    const precentage = (amount / max)*100;
    setPrec(precentage);
  }, [amount])

  function handleProgressColor(amount, max){

    const color = "#CF9FFF";

    if(prec >= 60 && prec < 90){
      return "#9C3764";
    }
    else if(prec >= 90 && prec <= 100){
      return "#440024";
    }
    return color;
  }

  return (
    <div>
      <div className='budget-card'>
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
          <div className="card-content-body">
            <div className='progress-bar'>
            <Progress_bar bgcolor = {handleProgressColor(amount, max)} progress = {prec.toFixed(2)} height = {37} />
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
      </div>
    </div>
  )
}

export default BudgetCard