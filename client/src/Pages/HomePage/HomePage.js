import React, { Component } from 'react';

import './HomePage.css';
import solar1 from  '../../assets/solar1.jpg'
import windmill1 from '../../assets/windmill1.jpg'; 
import notebook from '../../assets/notebook.jpg'; 

import HeaderComponent from '../../Components/HeaderComponent';
import CardComponent from '../../Components/CardComponent';

class HomePage extends Component {

  state = {}

  render() {
    return (
      <div>
        <div className="header__image">
          <HeaderComponent />
          </div>
          <div className="cards__wrapper">
            <CardComponent title="Clean Energy" image={solar1} />
            <CardComponent title="Recycling" image={windmill1} />
            <CardComponent title="Blog" image={notebook} />
        </div>
      </div>
    );
  }
}

export default HomePage;
