//creez o componenta care va trimite dataPoints catre Chart ce va mapa datele.

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 }, //initial valoarea este 0
    { label: "Feb", value: 0 }, //dar voi aduna preturile listei filtrate de pe fiecare luna
    { label: "Mar", value: 0 }, // ex -> chartDataPoints.value = 110 + 55 + 33 /-> pt luna Mar
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  //props.expenses = [{name: , price: , date: }, {same structure as first}, {same structure as first}, ...etc]
  // props.expenseList.forEach( expenseItem => { chartDataPoints[expenseItem.date.getMonth()].value += expenseItem.price} )

  for (let expense of props.expenses) {
    //actualizez valoarea pe fiecare luna adaugand suma articolului gasit asociat lunii respective
    chartDataPoints[expense.date.getMonth()].value += expense.price; // Jan => 0
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
