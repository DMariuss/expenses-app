// Componenta in care filtrez cheltuielile in functie de an

import Card from "../General_UI/Card";
import "./ExpenseFilter.scss";

const ExpensesFilter = (props) => {
  //initial gestionam starea aici, dar voi face asta in Expenses -> tot acolo fac si filtrarea -> aici doar preiau anul
  const selectedYearHandler = (event) => {
    //trimit anul selectat in componenta parinte
    props.onChangeFilter(event.target.value);
  };

  return (
    <Card className="expense-filter">
      <div className="expense-filter__control">
        <label htmlFor="selector">Filter by year</label>
        <select
          className=""
          id="selector"
          onChange={selectedYearHandler}
          value={props.selectedYear}
        >
          <option value="total">total</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;
