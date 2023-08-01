import React, {useState}  from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'


function NewExpenses (props) {

  const [isEditing, setIsEditing] = useState(false);


  const onSaveDataHandler = (expensesData) => {
    const expenseData = {
      id: Math.floor(Math.random() * 1000),
      ...expensesData
    }
    console.log(expenseData);
    props.onNewExpenseData(expenseData);
  }
  
  const openFormHandler = () => {
    setIsEditing(true);
  }

  const closeFormHandler = () => {
      setIsEditing(false);
  }
  
  

  return(
    <div className='new-expense'>
        {!isEditing && 
        (<button onClick={openFormHandler}>Add New Expense</button>)
        }
        {isEditing && (
          <ExpenseForm onCancel={closeFormHandler} onSaveExpenseData={onSaveDataHandler} ></ExpenseForm>
        )}

    </div>
  );
}

export default NewExpenses;
