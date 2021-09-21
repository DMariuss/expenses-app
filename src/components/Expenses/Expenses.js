//I will create a component that will hold all the ExpenseItem components
import { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../General_UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpenseChart";

import "./Expenses.scss";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("total");

  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // logica filtrarii o implementez aici si trimit lista spre a fi randata in ExpenseList

  // let sentList;
  // if (filteredYear === "total") {
  //   sentList = props.items;
  // } else {
  //   sentList = props.items.filter(
  //     (item) => item.date.getFullYear().toString() === filteredYear
  //   );
  // }  -------> alternativa

  let sentList =
    filteredYear === "total"
      ? props.items
      : props.items.filter(
          (item) => item.date.getFullYear().toString() === filteredYear
        );

  return (
    <Card className="expenses container">
      <ExpensesFilter
        onChangeFilter={selectedYearHandler}
        selectedYear={filteredYear}
      />

      <ExpensesChart expenses={sentList} />

      {/* in functie de variabila 'filtered' randez una din cele doua liste cu cheltuieli */}
      {/* {filtered ? filteredList : nonFilteredList} */}
      {/* {filteredList.length === 0 && <p>NIMIC AICI !!!!</p>} */}
      {/* {expensesContent} */}

      {/* Varianta in care am o componenta specifica acestei operatii -> am mutat logica in aceasta componenta*/}
      <ExpensesList expenses={sentList} onDelete={props.onDelete} />
    </Card>
  );
}

export default Expenses;
