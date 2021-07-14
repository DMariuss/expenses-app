import React, { useState } from "react";
import Expenses from "../components/Expenses/Expenses";
import ExpenseInput from "../components/ExpenseInput/ExpenseInput";

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

  //creez aici functia de va prelua datele unei noi componente cu cheltuieli
  const addExpenseData = (expense) => {
    //creez o copie a datelor principale -> date imuabile !!!!
    const newExpenseList = [...expenseList];
    //adaug noile intrari
    newExpenseList.push(expense);

    //updatez starea ce contine lista cu cheltuieli
    setExpenseList(newExpenseList);
  };

  return (
    <div className="App">
      <ExpenseInput onAddExpense={addExpenseData} />
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
