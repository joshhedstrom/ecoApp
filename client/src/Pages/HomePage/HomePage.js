import React, { Component } from 'react';

import './index.css';

import menuItems from '../menuItems.json'

import HeaderComponent from '../../components/HeaderComponent';
import CardComponent from '../../components/CardComponent';

class HomePage extends Component {

  state = {}


  render() {
    return (
      <div>
        <div className="header__image">
          <HeaderComponent />
          </div>
          <div className="cards__wrapper">
            {menuItems.menuItems.map((item, i) => <CardComponent key={item.title} title={item.title} img={item.img} {...item} />)}
        </div>
      </div>
    );
  }
}

export default HomePage;
