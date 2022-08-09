import React from 'react'
import '../Style/ExpenseDate.css';

const ExpensesDate = (props) => {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date-container'>
      <div className='expense-date-month'>{month}</div>
      <div className='expense-date-year'>{year}</div>
      <div className='expense-date-day'>{day}</div>
    </div>
  )
}

export default ExpensesDate;