import { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";

const BudgetContext = createContext();

const useBudgets = ()=> {
    return useContext(BudgetContext);
}

const BudgetsProvider = ({ children }) => {

    const [budgets, setBudget] = useLocalStorage("budgets",[]);
    const [expenses, setExpense] = useLocalStorage("expenses",[]);
    
    const getBudgetExpenses = (Id) =>{
        const filtered = expenses.filter(expense => parseInt(expense.budgetId) === Id);
        return filtered;
    }

    const addExpense =(description, amount, budgetId, color) =>{

        if(expenses.find(expense => expense.description === description)){
            const newExpense = expenses.map(ex =>{
                
                if(ex.description.toLowerCase() === description.toLowerCase()){
                    const newAmount = parseInt(ex.amount) + parseInt(amount);
                    return {...ex, amount : newAmount}
                }
                return ex;
            })
            setExpense(newExpense)
            return;
        }

        const id = expenses.length ? expenses[expenses.length-1].id + 1: 0;
        const newExpense = [...expenses, {id, description, amount, budgetId, color}];
        setExpense(newExpense);
    }

    const addBudget = (name, max) => {
        if(budgets.find(budget => budget.name === name)){
            alert("Budget already present")
            return;
        }
        
        const id = budgets.length ? budgets[budgets.length-1].id + 1 : 0;
        const newBudget = [...budgets, {id, name, max}] 
        setBudget(newBudget);
    }

    const deleteExpenses = (id) =>{
        const newExpense = expenses.filter(expenses => expenses.id !== parseInt(id));
        setExpense(newExpense);
    }

    const deleteBudget = (id)=>{
        const newBudget = budgets.filter(budgets => budgets.id !== id);
        setExpense(newBudget);
    }


    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            setExpense,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpenses
        }}>{children}</BudgetContext.Provider>
    )
}

export {useBudgets, BudgetsProvider};