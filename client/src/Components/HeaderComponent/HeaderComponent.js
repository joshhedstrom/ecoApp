import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';

function HeaderComponent(props) {
  return (
    <div className=".title__bar__buttonbar">
      <span className="title__bar__title">EcoGreen</span>
      <Link to="/articles" className="title__bar__button">
        Articles
      </Link>
      <Link to="/blog" className="title__bar__button">
        Blog
      </Link>
      <Link to="/products" className="title__bar__button">
        Endorsed Products
      </Link>
      <span className="title__bar__subtitle">
        A Simple Guide to Living a Green Life
      </span>
    </div>
  );
}

export default HeaderComponent;
