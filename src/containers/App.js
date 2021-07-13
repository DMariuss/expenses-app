import { useState } from "react";
import ExpenseItem from "../components/ExpenseItem/ExpenseItem";

import "./App.scss";

function App() {
  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      name: "Groceries",
      price: 103,
      date: new Date(2021, 6, 18),
    },
    {
      id: 2,
      name: "Car",
      price: 348,
      date: new Date(2021, 7, 8),
    },
    {
      id: 3,
      name: "Medical",
      price: 89,
      date: new Date(2021, 7, 25),
    },
  ]);

  //parcurg lista cu cheltuielile si creez un vector in care am JSX cu fiecare componenta -> le voi randa in APP
  const expenses = expenseList.map((item) => (
    <ExpenseItem
      key={item.id}
      name={item.name}
      cost={item.price}
      date={item.date}
    />
  ));

  return <div className="App">{expenses}</div>;
}

export default App;
