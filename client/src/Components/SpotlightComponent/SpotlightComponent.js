import React from 'react';

import './index.css';

function SpotlightComponent(props) {
  return (
  <div className="spotlight__wrapper">
      {/* <div className="spotlight__image" style={{backgroundImage: `url(${props.img})`}}>

      </div> */}
      <h2 classname="spotlight__title">{props.title}</h2>

  </div>
  );
}

export default SpotlightComponent;
