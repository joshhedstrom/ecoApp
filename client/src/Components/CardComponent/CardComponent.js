import React from 'react';

import './index.css';

function CardComponent(props) {
  return (
    <div className="background__image card" style={{backgroundImage: `url(${props.img})`}} >
      <div>
        <h3 className="card__title">{props.title}</h3>
      </div>
    </div>
  );
}

export default CardComponent;
