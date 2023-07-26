import React, {useState} from 'react'
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css'


function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  let clickHandler = () => {
    setTitle("Updated!!!");
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date = {props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Update the Value</button>
    </div>
  );
}

export default ExpenseItem;