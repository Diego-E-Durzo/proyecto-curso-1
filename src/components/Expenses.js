import React, { useState } from 'react'
import Card from './Card';
import '../Style/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesGraphic from './ExpensesGraphic';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses-container">
        <ExpenseFilter 
          selected={filteredYear} 
          onFilterChange={filterChangeHandler}
          /> 
          <ExpensesGraphic expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;