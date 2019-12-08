import React from 'react';

import './index.css';

function CardComponent(props) {
  return (
    <div>
      <div className="background__image" style={{backgroundImage: `url(${props.image})`}}>
        <span>{props.title}</span>
      </div>
    </div>
  );
}

export default CardComponent;
