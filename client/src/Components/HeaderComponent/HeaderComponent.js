import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';

function HeaderComponent(props) {
  return (
    <div className=".title__bar__buttonbar">
      <span className="title__bar__title">ecoGreen</span>
      <Link to="/articles" className="title__bar__button">
        articles
      </Link>
      <Link to="/blog" className="title__bar__button">
        blog
      </Link>
      <Link to="/products" className="title__bar__button">
        endorsed products
      </Link>
      <span className="title__bar__subtitle">
        a simple guide to living a green life
      </span>
    </div>
  );
}

export default HeaderComponent;
