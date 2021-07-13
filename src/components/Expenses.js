//I will create a component that will hold all the ExpenseItem components

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import classes from "./Expenses.module.scss";

function expenses(props) {
  return (
    <Card className={classes.expenses}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          name={item.name}
          cost={item.price}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default expenses;
