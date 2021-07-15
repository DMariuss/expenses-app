import React, { useState } from "react";
import Expenses from "../components/Expenses/Expenses";
import ExpenseInput from "../components/ExpenseInput/ExpenseInput";

import "./App.scss";

const EXPENSES_TEST = [
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
  {
    id: 4,
    name: "Washing Machine",
    price: 350,
    date: new Date(2019, 2, 22),
  },
  {
    id: 5,
    name: "New motorcycle",
    price: 4500,
    date: new Date(2018, 12, 22),
  },
];

function App() {
  const [expenseList, setExpenseList] = useState(EXPENSES_TEST);

  //creez aici functia de va prelua datele unei noi componente cu cheltuieli
  const addExpenseData = (expense) => {
    //creez o copie a datelor principale -> date imuabile !!!!
    // const newExpenseList = [...expenseList];
    //adaug noile intrari -> la inceputul listei
    // newExpenseList.unshift(expense);

    //updatez starea ce contine lista cu cheltuieli
    // setExpenseList(newExpenseList);

    // O VARIANTA MAI RAPIDA:   --- nu uita ca depinde de ultima stare -> asa ca folosesc callback
    setExpenseList((prevState) => {
      return [expense, ...prevState];
    });
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
