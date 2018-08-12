import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      		<div className="siteName">
          		<img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-name">The Red Sunflower</h1>
      		</div>
      		<nav className= "main-nav">
      		    <label for="toggle">Menu &#9776;</label>
              <input type="checkbox" id="toggle"/>
        <div class="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
      		</nav>
      </div>
    );
  }
}

export default Header;