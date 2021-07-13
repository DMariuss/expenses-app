import React from "react";
import { useState } from "react";
import Expenses from "../components/Expenses";

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

  return (
    <div className="App">
      <h2>Expenses List </h2>
      <Expenses items={expenseList} />
    </div>
  );

  //in fundal React foloseste aceste metode pt a crea elementele -> varianta pe care React o foloseste 'behind the stage'
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h2", {}, "Expenses List"),
  //   React.createElement(Expenses, { items: expenseList })
  // );
}

export default App;
