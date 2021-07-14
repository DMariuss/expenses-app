// import React from "react"; //se pare ca nu mai este nevoie sa declar acest import

// In aceasta componenta voi afisa cheltuielile
import ExpenseDate from "./ExpenseDate";
import Card from "../General_UI/Card";
import { useState } from "react";

import classes from "./ExpenseItem.module.scss";

function ExpenseItem(props) {
  //hook-ul useState pt fiecare componenta randata este diferit
  const [name, setName] = useState(props.name);

  const clickHandler = () => {
    setName("Updated");
  };

  return (
    <Card className={classes.expense_item}>
      {/* <p>{props.date}</p> */}
      <ExpenseDate date={props.date} />
      <div className={classes.expense_item__description}>
        <h2>{name}</h2>
        <div className={classes.expense_item__price}>${props.cost}</div>
        <button onClick={clickHandler}>Update Expense Name</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
