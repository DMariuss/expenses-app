//I will create a component that will hold all the ExpenseItem components

import ExpenseItem from "./ExpenseItem";
import Card from "../General_UI/Card";
import "./Expenses.scss";

function Expenses(props) {
  return (
    <Card className="expenses container">
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

export default Expenses;
