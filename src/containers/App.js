import React, { useState, useEffect } from "react";
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

// functie pt a prelua datele din localStorage si a le adauga direct in starea cu 'expenseList' pt a nu mai astepta o rulare a unui useEffect pt a aplica asta
const retrieveExpenses = () => {
  const savedList = localStorage.getItem("expenses");

  if (savedList) {
    // parsez lista salvata in localStorage
    const parsedSavedList = JSON.parse(savedList);

    //transform datele din string(le-a convertit automat) inapoi in tip de data Date
    const transformedList = parsedSavedList.map((expense) => ({
      ...expense,
      date: new Date(expense.date),
    }));

    return transformedList;
  } else {
    return null;
  }
};

// const EXPENSES_TEST = [];
function App() {
  const renderedExpensesList = retrieveExpenses()
    ? retrieveExpenses()
    : EXPENSES_TEST;

  const [expenseList, setExpenseList] = useState(renderedExpensesList);

  //creez aici functia de va prelua datele unei noi componente cu cheltuieli

  // 🢣 adaug o noua cheltuiala in lista
  const addExpenseData = (expense) => {
    //creez o copie a datelor principale -> date imuabile !!!!
    // const newExpenseList = [...expenseList];                   <---- nu tine cont de previous State
    //adaug noile intrari -> la inceputul listei
    // newExpenseList.unshift(expense);

    //updatez starea ce contine lista cu cheltuieli
    // setExpenseList(newExpenseList);

    // VARIANTA prelucrata a celei de mai sus, dar care tine cont de vechea stare    <-- tine cont de previous State
    // setExpenseList(prevList => {
    //   const newList = [...prevList];
    //   newList.unshift(expense);
    //   return newList;
    // })

    // O VARIANTA MAI RAPIDA:   --- nu uita ca depinde de ultima stare -> asa ca folosesc callback
    setExpenseList((prevState) => {
      return [expense, ...prevState];
    });
  };

  // 🢣 inlatur o anume cheltuiala
  const deleteExpense = (id) => {
    // filtrez intreaga lista pt a inlatura un element
    const updatedList = expenseList.filter((expense) => expense.id !== id);

    setExpenseList(updatedList);
  };

  // 🢣 acesta va prelua datele salvate in local storage    **************** mutate in functia de mai sus pt eficientizarea codului
  // useEffect(() => {
  //   console.log("in 2useEffect ", expenseList);

  //   const savedList = localStorage.getItem("expenses");

  //   if (savedList) {
  //     // parsez lista salvata in localStorage
  //     const parsedSavedList = JSON.parse(savedList);
  //     //transform datele din string(le-a convertit automat) inapoi in tip de data Date
  //     const transformedList = parsedSavedList.map((expense) => ({
  //       ...expense,
  //       date: new Date(expense.date),
  //     }));

  //     setExpenseList(transformedList);
  //   }
  // }, []); // 🢣 🢣 🢣 Problema: la salvare in localStorage tipul de data 'Date' se va converti in string si la parsare o sa am .date de tip string
  // 🢣 🢣 🢣 Solutie: il reconvertesc

  // 🢣 acesta va scrie datele in local storage
  useEffect(() => {
    console.log("in 1useEffect ", expenseList);
    //transform datele intr-un obiect de tip json
    const savedList = JSON.stringify(expenseList);

    //scriu datele in storage
    localStorage.setItem("expenses", savedList);

    if (expenseList.length <= 0) {
      localStorage.removeItem("expenses");
    }
  }, [expenseList]);

  return (
    <div className="App">
      <ExpenseInput onAddExpense={addExpenseData} />
      <Expenses items={expenseList} onDelete={deleteExpense} />
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
