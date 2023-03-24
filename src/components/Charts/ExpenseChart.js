import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import randomColor from "randomcolor";
import { Doughnut } from "react-chartjs-2";
import { useBudgets } from "../../Context/BudgetContext";
import distinctColors from 'distinct-colors'
import "./ExpenseChart.css"
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)
const ExpenseChart = ({label, amount}) => {

  const color = [];
  const {budgets} = useBudgets();

  console.log(amount.length)
  

  if(amount.length !== 0){
  amount.forEach(a=>{
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  const c = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  color.push(c);
  })
  }
  
  // setColor(color);

  const data = {
    labels : label,
    datasets : [{
      label : 'poll',
      data : amount,
      backgroundColor : color,
      borderColor : color
    }]
  }


  return (
    <div className="chart">
      <Doughnut
        data = {data}
      />
      
    </div>
  )
}

export default ExpenseChart