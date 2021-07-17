import "./ChartBar.scss";

const ChartBar = (props) => {
  //voi folosi aceasta variabila pt stabilirea 'height' a fiecarui div '__fill'
  let fillPercentage = "0%";

  //conditie pt cazul in care nu am nici o cheltuiala intr-un anume an
  if (props.maxValue > 0) {
    //raportul ce-mi determina procentajul: valoarea_din_luna_atribuita_acestei_componente/valoarea_maxima
    fillPercentage = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
