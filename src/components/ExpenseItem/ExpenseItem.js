// import React from "react"; //se pare ca nu mai este nevoie sa declar acest import

// In aceasta componenta voi afisa cheltuielile
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import classes from "./ExpenseItem.module.scss";

function expenseItem(props) {
  return (
    <div className={classes.expense_item}>
      {/* <p>{props.date}</p> */}
      <ExpenseDate date={props.date} />
      <div className={classes.expense_item__description}>
        <h2>{props.name}</h2>
        <div className={classes.expense_item__price}>${props.cost}</div>
      </div>
    </div>
  );
}

export default expenseItem;
