import React, {useState} from 'react';
import '../Style/ExpenseForm.css';

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // });

  const handlerChangeTitle = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
  };

  const handlerChangeAmount = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
  };


  const handlerChangeDate = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }; 

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__inputs' > 
        <div className='new-expense__input'>
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle}
            onChange={handlerChangeTitle}/>
        </div>
        <div className='new-expense__input'>
          <label>Amount</label>
          <input 
            type='number' 
            min='0.01' 
            step='0.01' 
            value={enteredAmount}
            onChange={handlerChangeAmount}/>
        </div>
        <div className='new-expense__input'>
          <label>Date</label>
          <input 
            type='date'  
            min='2020-01-01' 
            max='2100-12-31'
            value={enteredDate}
            onChange={handlerChangeDate}/>
        </div>
        <div className='new-expense__buttons'>
          <button type='button' onClick={props.onCancel}>Cancelar</button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;