import React from 'react'
import '../Style/ExpenseFilter.css';

const ExpenseFilter = (props) => {

  const selectChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className='filter-container'>
      <div className='filter-select'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectChangeHandler} >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  )
};

export default ExpenseFilter;