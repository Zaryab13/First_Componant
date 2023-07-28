import ExpenseForm from './ExpenseForm';
import './NewExpenses.css'


function NewExpenses (props) {
  const onSaveDataHandler = (expensesData) => {
    const expenseData = {
      ...expensesData
    }
    console.log(expenseData);
    props.onNewExpenseData(expenseData);
  }
  

  return(
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveDataHandler}/>
    </div>
  );
}

export default NewExpenses;
