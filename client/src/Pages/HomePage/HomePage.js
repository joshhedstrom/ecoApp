import React, { Component } from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import CardComponent from '../../components/CardComponent';

import menuItems from '../menuItems.json';
import './index.css';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="homepage__wrapper">
        <div className="header__image">
          <HeaderComponent />
        </div>
        <div className="cards__wrapper">
          {menuItems.menuItems.map((item, i) => (
            <CardComponent key={item.title} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
