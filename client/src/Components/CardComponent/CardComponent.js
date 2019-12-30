import React from 'react';

import { Link } from 'react-router-dom';
import './index.css';

function CardComponent(props) {
  return (
    <Link className="card" to={props.link} style={{ backgroundImage: `url(${props.img})` }}>
      <h3 className="card__title">{props.title}</h3>
    </Link>
  );
}

export default CardComponent;
