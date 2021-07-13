// Creez o componenta Card ce joaca un rol in compozitia elementelor -> de ex. pot reduce duplicarile codului(stilizarile)

// Card este o componenta customizabila ce va infasura codul -> in loc de <div className='ceva'>..cod..<div> voi avea <Card className='ceva'>..cod..</Card>

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
