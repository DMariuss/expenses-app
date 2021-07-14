// Aici am componenta ce preia datele de intrare -> componenta cu formularul este ExpenseForm

import ExpenseForm from "./ExpenseForm";
import Card from "../General_UI/Card";
import "./ExpenseInput.scss";

const ExpenseInput = (props) => {
  //definesc aici functia ce va prelua datele din ExpenseForm
  const saveExpenseDataHandler = (data) => {
    //la fel fac si aici, trimit datele mai sus in componenta App -> trebuie sa mai adaug un id in acel obiect
    const expenseData = { ...data, id: Math.random().toString() };
    //trimit aici datele componentei parinte
    props.onAddExpense(expenseData);
  };

  return (
    <Card className="container">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
    // infasor in componenta Card pt a adauga stilizarea specifica
  );
};

export default ExpenseInput;
