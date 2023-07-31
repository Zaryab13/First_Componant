import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
  const [filteredYear , setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  }
  // props.items.filter(gets each user per iteration and pass it to the callback i.e 
  // (user)=> return apply the condition for filter here)
  const filteredExpenses = props.items.filter(user => user.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onFilteredYear={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;