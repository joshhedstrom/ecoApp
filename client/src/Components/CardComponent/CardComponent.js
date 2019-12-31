import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './index.css';

function CardComponent(props) {
  return (
    <Link className="card" to={props.link}>
      <div className="icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h3 className="card__title">{props.title}</h3>
    </Link>
  );
}

export default CardComponent;
