// import React from "react"; //se pare ca nu mai este nevoie sa declar acest import

// In aceasta componenta voi afisa cheltuielile
import ExpenseDate from "./ExpenseDate";
import Card from "../General_UI/Card";

import classes from "./ExpenseItem.module.scss";

function ExpenseItem(props) {
  return (
    <li>
      <Card className={classes.expense_item}>
        {/* <p>{props.date}</p> */}
        <ExpenseDate date={props.date} />
        <div className={classes.expense_item__description}>
          <h2>{props.name}</h2>
          <div className={classes.expense_item__price}>&euro;{props.cost}</div>
          <button
            type="button"
            className={classes.expense_item__delete}
            // 🢣 folosesc metoda .bind pt a lega id-ul ca si argument
            onClick={props.onDelete.bind(this, props.id)}
          >
            &#215;
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
