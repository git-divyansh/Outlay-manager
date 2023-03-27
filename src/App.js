import './App.css';
import BudgetCard from './components/BudgetCard.js';
import AddBudgteModal from './components/Modal/AddBudgteModal.js';
import AddExpenseModal from './components/Modal/AddExpenseModal.js';
import ViewExpenseModal from './components/Modal/ViewExpenseModal.js';

import { useState, React } from 'react';
import { useBudgets } from './Context/BudgetContext.js';
function App() {

  const [showAddBudget, setShowAddBudget] = useState(false);
  const [clickExpense, setClickExpense] = useState(false);
  const [viewExpense, setViewExpense] = useState(false);
  const [budgetID, setBudgetId] = useState(0);
  const {budgets, getBudgetExpenses} = useBudgets();


  
  return ( 
    <div className='root'>
      {showAddBudget && <div className="outer">
        <AddBudgteModal show = {showAddBudget} setShow = {setShowAddBudget}/>
      </div>}

      {clickExpense && <div className="outer">
        <AddExpenseModal show = {clickExpense} setShow = {setClickExpense} id = {budgetID}/>
      </div>
      }

      {viewExpense && <div className="outer">
        <ViewExpenseModal show = {viewExpense} setShow = {setViewExpense} budgetID = {budgetID}/>
      </div>
      }

      <div className="container">
        <div className='stack'>
          <h1 className='budget-heading'>Budget</h1>
          <div className='budget-expense-button'>
            
            <button id ="addBudget" className='add-budget-button' onClick={() => setShowAddBudget(!showAddBudget)}>Add Budget</button>
            <button className='add-expense-button' onClick= {() => setClickExpense(!clickExpense)}>Add Expense</button>
            
          </div>
        </div>  
        <div className='card-grid'>
        {budgets.map(budget =>{
       
          const filteredAmount = getBudgetExpenses(budget.id);
          var amount = 0;
          filteredAmount.forEach(element => {
            amount += parseInt(element.amount);
          });
          return (

                <BudgetCard 
                  id = {parseInt(budget.id)}
                  name = {budget.name}
                  amount = {amount}
                  max = {budget.max}
                  clickExpense = {clickExpense}
                  setClickExpense = {setClickExpense}
                  viewExpense = {viewExpense}
                  setViewExpense = {setViewExpense}
                  setBudgetId = {setBudgetId}
                />

          )}
        )}
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
