//I will create a component that will hold all the ExpenseItem components
import { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../General_UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.scss";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filtered, setFiltered] = useState(false);

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    //in cazul in care vreau sa filtrez in functie de an
    setFiltered(true);
  };

  //lista cheltuielilor nefiltrata => total
  // const nonFilteredList = props.items.map((item) => (
  //   <ExpenseItem
  //     key={item.id}
  //     name={item.name}
  //     cost={item.price}
  //     date={item.date}
  //   />
  // ));
  //lista cheltuielilor filtrata
  // const filteredList = props.items
  //   .filter((item) => item.date.getFullYear().toString() === filteredYear)
  //   .map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       name={item.name}
  //       cost={item.price}
  //       date={item.date}
  //     />
  //   ));

  // !!!!!!!!!!!!!!! VARIANTA FINALA => cea mai buna si clara varianta
  // let expensesContent = props.items.map((item) => (
  //   <ExpenseItem
  //     key={item.id}
  //     name={item.name}
  //     cost={item.price}
  //     date={item.date}
  //   />
  // ));

  // in cazul in care vreau sa filtrez suprascriu variabila
  // if (filtered) {
  //   expensesContent = props.items
  //     .filter((item) => item.date.getFullYear().toString() === filteredYear)
  //     .map((item) => (
  //       <ExpenseItem
  //         key={item.id}
  //         name={item.name}
  //         cost={item.price}
  //         date={item.date}
  //       />
  //     ));
  //in cazul in care nu lista mea este goala afisez acest element
  // if (expensesContent.length === 0) {
  //   expensesContent = <p>NIMIC AICI</p>;
  // }
  // }

  //o varianta ar fi sa pun aici un element -> imi da un avertisment -> trebuie sa pun un identificator unic pe element int-o lista -> pot ignora asta
  // o alta varianta ar fi sa pun conditie in return -> si asta o sa si folosesc
  // if (filteredList.length === 0) {
  //   filteredList.push(<p>Nu ai nimic aici</p>);
  // }

  return (
    <Card className="expenses container">
      <ExpensesFilter
        onChangeFilter={selectedYearHandler}
        selectedYear={filteredYear}
      />
      {/* in functie de variabila 'filtered' randez una din cele doua liste cu cheltuieli */}
      {/* {filtered ? filteredList : nonFilteredList} */}
      {/* {filteredList.length === 0 && <p>NIMIC AICI !!!!</p>} */}
      {/* {expensesContent} */}

      {/* Varianta in care am o componenta specifica acestei operatii -> am mutat logica in aceasta componenta*/}
      <ExpensesList
        expenses={props.items}
        isFiltered={filtered}
        selectedYear={filteredYear}
      />
    </Card>
  );
}

export default Expenses;
