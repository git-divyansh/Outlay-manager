import './App.css';
import BudgetCard from './components/BudgetCard.js';
import AddBudgteModal from './components/Modal/AddBudgteModal.js';
import AddExpenseModal from './components/Modal/AddExpenseModal.js';
import ViewExpenseModal from './components/Modal/ViewExpenseModal.js';
import TitleExepenseManager from './components/TitleExpenseManager';
import { ArrowLeftOutlined, ArrowRightOutlined, Translate } from '@mui/icons-material'
import { useState, React } from 'react';
import { useBudgets } from './Context/BudgetContext.js';
function App() {

  const [showAddBudget, setShowAddBudget] = useState(false);
  const [clickExpense, setClickExpense] = useState(false);
  const [viewExpense, setViewExpense] = useState(false);
  const [budgetID, setBudgetId] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const {budgets, getBudgetExpenses} = useBudgets();

  const handleClick = (str)=>{
    if(str === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : budgets.length/2 - 1);
    }
    else{
      setSlideIndex(slideIndex < budgets.length/2 - 1 ? slideIndex + 1 : 0);
    }
  }
  
  return ( 
    <div className='root'>
      <div className="container">
        <div className='stack'>
          <div className='header'>
              <h1 className='budget-heading'>
                <TitleExepenseManager/>
              </h1>
              <div className='budget-expense-button'>
                <button id ="addBudget" className='add-budget-button' onClick={() => setShowAddBudget(!showAddBudget)}>Add Budget</button>
                <button className='add-expense-button' onClick= {() => setClickExpense(!clickExpense)}>Add Expense</button>
              </div>
          </div> 
        </div>  
      </div>
      <div className='card-outer'>
        <div className='arrow' style={{left : "10px"}} onClick={()=>handleClick("left")}>
          <ArrowLeftOutlined />
        </div>
        <div className='card-grid'>
          <div style={{transition :"all 1.5s ease" ,display : 'flex' ,transform : `translate(${slideIndex * - 61}vw)`}}>
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
        <div className='arrow' style={{right : "10px"}} onClick={()=>handleClick("right")}>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className="footer">
        <p>This is some content in footer</p>
      </div>
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
    </div>
  );
}

export default App;
