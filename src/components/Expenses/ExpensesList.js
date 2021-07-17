// Componenta care imi randeaza elementele in functie de selectie -> va fi o componenta prezentationala  -> am mutat logica din comp App in aceasta componenta

import ExpenseItem from "./ExpenseItem";
//import aici aceasta componenta pt ca aici fac filtrarea -> vreau sa apara doar cand il filtrez

import "./ExpensesList.scss";

const ExpensesList = (props) => {
  // !!!!!!!!!!!!!!! VARIANTA FINALA => cea mai buna si clara varianta
  let expensesContent = props.expenses.map((item) => (
    <ExpenseItem
      key={item.id}
      name={item.name}
      cost={item.price}
      date={item.date}
    />
  ));

  //filtrez lista
  const filteredList = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === props.selectedYear
  );

  // in cazul in care vreau sa filtrez suprascriu variabila
  if (props.isFiltered) {
    expensesContent = filteredList.map((item) => (
      <ExpenseItem
        key={item.id}
        name={item.name}
        cost={item.price}
        date={item.date}
      />
    ));
    //in cazul in care nu lista mea este goala afisez acest element
    //pot pune return cu acest element aici pt ca aceasta componenta imi intoarce un singur lucru (asta nu era valabil in componenta Expenses - unde foloseam inainte)
    if (expensesContent.length === 0) {
      return <h2 className="expenses-list__fallback">No expense found</h2>;
    }
  }

  return <ul>{expensesContent}</ul>;
};

export default ExpensesList;
