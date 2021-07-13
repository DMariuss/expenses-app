import classes from "./ExpenseDate.module.scss";

const expenseCalendar = (props) => {
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const date = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.calendar}>
      <div>{month}</div>
      <div>{year}</div>
      <div>{date}</div>
    </div>
  );
};

export default expenseCalendar;
