// Aici am componenta ce preia datele de intrare -> componenta cu formularul este ExpenseForm
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../General_UI/Card";
import "./ExpenseInput.scss";

const ExpenseInput = (props) => {
  //definesc o noua variabila de stare ce-mi modifica output-ul componentei(ori butonul pt adaugarea unei noi cheltuieli, ori formularul meu)
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  //definesc aici functia ce va prelua datele din ExpenseForm
  const saveExpenseDataHandler = (data) => {
    //la fel fac si aici, trimit datele mai sus in componenta App -> trebuie sa mai adaug un id in acel obiect
    const expenseData = { ...data, id: Math.random().toString() };
    //trimit aici datele componentei parinte
    props.onAddExpense(expenseData);
  };

  const expenseFormHandler = () => {
    setShowExpenseForm(true);
  };

  //definesc functia ce o voi lega de butonul Cancel din componenta copil ExpenseForm.
  const cancelExpenseAddHandler = () => {
    setShowExpenseForm(false);
  };

  //O alta varianta de a crea logica -> si in return voi avea o singura linie cu aceasta variabila
  let toggleExpenseForm = (
    <button className="expense-input__btn" onClick={expenseFormHandler}>
      Add New Expense
    </button>
  );

  if (showExpenseForm) {
    toggleExpenseForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelExpenseAddHandler}
      />
    );
  }

  return (
    <Card className="container">
      {/* {!showExpenseForm && (
        <button onClick={expenseFormHandler}>Add New Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelExpenseAdd={cancelExpenseAddHandler}
        />
      )} */}
      {toggleExpenseForm}
    </Card>
    // infasor in componenta Card pt a adauga stilizarea specifica
  );
};

export default ExpenseInput;
