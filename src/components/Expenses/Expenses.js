//I will create a component that will hold all the ExpenseItem components
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../General_UI/Card";
import ExpensesFilter from "./ExpenseFilter";
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
  const nonFilteredList = props.items.map((item) => (
    <ExpenseItem
      key={item.id}
      name={item.name}
      cost={item.price}
      date={item.date}
    />
  ));
  //lista cheltuielilor filtrata
  const filteredList = props.items
    .filter((item) => item.date.getFullYear().toString() === filteredYear)
    .map((item) => (
      <ExpenseItem
        key={item.id}
        name={item.name}
        cost={item.price}
        date={item.date}
      />
    ));

  return (
    <Card className="expenses container">
      <ExpensesFilter
        onChangeFilter={selectedYearHandler}
        selectedYear={filteredYear}
      />
      {/* in functie de variabila 'filtered' randez una din cele doua liste cu cheltuieli */}
      {filtered ? filteredList : nonFilteredList}
    </Card>
  );
}

export default Expenses;
