import React, { Component } from 'react';

import './index.css';

import menuItems from '../menuItems.json'
// import solar1 from  '../../assets/solar1.jpg'
// import windmill1 from '../../assets/windmill1.jpg'; 
// import notebook from '../../assets/notebook.jpg'; 

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
<<<<<<< Updated upstream
            {menuItems.menuItems.map((item, i) => {
              return <CardComponent key={item.title} title={item.title} image={item.img} {...item} />
            })}
            {/* <CardComponent title="Clean Energy" image={solar1} />
            <CardComponent title="Recycling" image={windmill1} />
            <CardComponent title="Blog" image={notebook} /> */}
=======
            <CardComponent title="clean energy" image={solar1} />
            <CardComponent title="recycling" image={recycling1} />
            <CardComponent title="blog" image={notebook} />
>>>>>>> Stashed changes
        </div>
      </div>
    );
  }
}

export default HomePage;
