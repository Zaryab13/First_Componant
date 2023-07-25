import Expenses from "./Componants/Expenses";

function App() {
  const expenses = [
    {
      title: "Groceries",
      amount: 50.25,
      date: new Date("2023, 7, 24"),
    },
    {
      title: "Gasoline",
      amount: 30.5,
      date: new Date("2023, 7, 24"),
    },
    {
      title: "Dinner",
      amount: 75.0,
      date: new Date("2023, 7, 24"),
    },
    {
      title: "Movie Tickets",
      amount: 40.75,
      date: new Date("2023, 7, 24"),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
