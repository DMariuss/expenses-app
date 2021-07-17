import React, { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  // **** destructurez pt stocarea intrarilor in variabile pt gestionarea starilor
  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  //O alta varianta ar fi sa creez o singura stare ce contine aceste proprietati
  //   const [userInput, setUserInput] = useState({
  //     nameInput: "",
  //     priceInput: "",
  //     dateInput: "",
  //   });

  // **** functii pt gestionarea intrarilor -> preiau valorile fiecarui input si le stochez in variabila ce retine starea fiecarui input
  // ---> in cazurile in care noua stare depinde de vechea stare este indicat sa folosim in useState(sau functia ce schimba starea) o functie aninima cu parametrul
  //            ultimei stari !!!!!!!!!!!!!!!!!!!!!!!!!!!!!  => pt a fi singuri ca avem starea precedenta actualizata
  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   nameInput: event.target.value,
    // }));
  };
  const priceChangeHandler = (event) => {
    setPriceInput(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   priceInput: event.target.value,
    // }));
  };
  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
    // setUserInput((prevState) => ({
    //   ...prevState,
    //   dateInput: event.target.value,
    // }));
  };

  const formHandler = (event) => {
    //previn comportamentul implicit al formularului(acela de a trimite solicitarea, reincarcand pagina)
    event.preventDefault();

    //si extrag valorile intr-un obiect
    const enteredInput = {
      name: nameInput,
      price: +priceInput, // + pt a-l transforma in 'type number'
      date: new Date(dateInput),
    };

    //pt a trimite date/stari de la componentele copil la cele parinte va trebui sa apelam aici o functie definita in comp. parinte, cu argumente din comp. copil
    props.onSaveExpenseData(enteredInput);
    //dupa ce trimit datele pt a fi salvate, inlatur formularul -> o alta varianta era sa apelez direct functia 'setShowExpenseForm' in functia ce-mi prelua datele
    //                                                      direct in ExpenseInput
    props.onCancel();

    //dupa executarea codului la submit voi reseta campurile intrarilor
    setNameInput("");
    setPriceInput("");
    setDateInput("");
  };

  return (
    <form className="expense-input" onSubmit={formHandler}>
      <div className="expense-input__controls">
        <div className="expense-input__control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name of expense"
            required
            value={nameInput}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="expense-input__control">
          <label htmlFor="price">Amount</label>
          <input
            id="price"
            type="number"
            min="0.01"
            step="0.01"
            required
            placeholder="Price of expense"
            value={priceInput}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="expense-input__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            required
            value={dateInput}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="expense-input__action">
        <button
          className="expense-input__btn"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className="expense-input__btn" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
