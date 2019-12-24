import React from 'react';

import './index.css';

function CardComponent(props) {
  return (
    <div className="card">
      <div className="background__image" style={{backgroundImage: `url(${props.image})`}}>
        <h3 className="card__title">{props.title}</h3>
      </div>
    </div>
  );
}

export default CardComponent;
