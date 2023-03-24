import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BudgetsProvider } from './Context/BudgetContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetsProvider children={Children}>
      <App />
    </BudgetsProvider>
  </React.StrictMode>
);

