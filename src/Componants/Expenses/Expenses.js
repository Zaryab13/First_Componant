import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList'
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };
  // props.items.filter(gets each user per iteration and pass it to the callback i.e
  // (user)=> return apply the condition for filter here).
  const filteredExpenses = props.items.filter(
    (user) => user.date.getFullYear().toString() === filteredYear
  );
    // CONTRLLING THE CONDITIONAL OUTPUT FROM HERE AND CAN ALSO BE DONE VIA A SEPARATE
    // COMPONANT WHERE WE DONT NEED THE TERNARY OR JS ABUSE METHOD BECAUSE THE WHOLE THE JSX IS CHANGING THERE THATS WHY WE CAN RETURN A DIFFERENT JSX BASED ON A CONDITION WHILE HERE ONLY A PART OF THE JSX CODE WAS BEING CHANGED.
  // let expensesContent = <h2 className="expenses_empty">No Expenses Found</h2>;

  // if (filteredExpenses.length > 0 ){
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilteredYear={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
