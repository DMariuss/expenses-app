import { useState } from "react";
import Expenses from "../components/Expenses";

import "./App.scss";

function App() {
  const [expenseList, setExpenseList] = useState([
    {
      id: 1,
      name: "Groceries",
      price: 103,
      date: new Date(2021, 6, 18),
    },
    {
      id: 2,
      name: "Car",
      price: 348,
      date: new Date(2021, 7, 8),
    },
    {
      id: 3,
      name: "Medical",
      price: 89,
      date: new Date(2021, 7, 25),
    },
  ]);

  return (
    <div className="App">
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
