import ExpenseItem from "./Componants/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Groceries",
      amount: 50.25,
      date: new Date(2023, 7, 24),
    },
    {
      title: "Gasoline",
      amount: 30.5,
      date: new Date(2023, 7, 24),
    },
    {
      title: "Dinner",
      amount: 75.0,
      date: new Date(2023, 7, 24),
    },
    {
      title: "Movie Tickets",
      amount: 40.75,
      date: new Date(2023, 7, 24),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
