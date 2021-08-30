import ChartBar from "./ChartBar";
import "./Chart.scss";

const Chart = (props) => {
  //maxValue = [maximul valorilor din vector -> dar eu primesc un vector cu obiecte ce au propr. value -> preluam intr-un alt vector doar valorile propr. value]
  // props.dataPoints = [{label: 'Jan', value: 14}, {label: 'Mar', value: 176},...etc] => props.dataPoints.map((dataPoint) => dataPoint.value)

  const maxMonthValue = props.dataPoints.reduce(
    (maximum, { label: month, value }) => (value > maximum ? value : maximum),
    0
  ); // =====> varianta folosind metoda reduce

  //pe baza listei primite, creez o alta lista ce va contine doar valorile propr '.value'
  // const allValues = props.dataPoints.map((dataPoint) => dataPoint.value); // => [14, 176, ..etc]
  //din toate aceste voi prelua valoarea maxima -> am nevoie de o valoare maxima pt a calcula procentajul din fiecare luna (maxValue -> ca reper)
  // const maxMonthValue = Math.max(...allValues); // => 'number'

  console.log("maximum value", maxMonthValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} // putem folosi si eticheta in locul unui ID pt un identificator unic
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxMonthValue}
        />
      ))}
    </div>
  );
};

export default Chart;
