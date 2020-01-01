import React, { Component } from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import CardComponent from '../../components/CardComponent';

import menuItems from '../menuItems.json';
import './index.css';
import SpotlightComponent from '../../components/SpotlightComponent/SpotlightComponent';

class HomePage extends Component {
  state = {
    spotlight: {
      title: '10 Recycling Tips for 2020',
      link: '',
      img: '/assets/recycling1.jpg'
    }
  };

  render() {
    return (
      <div>
        <div className="background__video__wrapper">
        <video loop muted autoPlay className="background__video">
          <source src="/assets/bee-flower.mp4"></source>
        </video>
        </div>
        <div className="homepage__wrapper">
          <HeaderComponent />
          <SpotlightComponent {...this.state.spotlight} />
          <div className="cards__wrapper">
            {menuItems.menuItems.map((item, i) => (
              <CardComponent key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
