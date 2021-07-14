import classes from "./ExpenseDate.module.scss";

const ExpenseCalendar = (props) => {
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const date = props.date.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.calendar}>
      <div className={classes.calendar__month}>{month}</div>
      <div className={classes.calendar__year}>{year}</div>
      <div className={classes.calendar__date}>{date}</div>
    </div>
  );
};

export default ExpenseCalendar;
