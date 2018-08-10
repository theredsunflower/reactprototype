import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      		<div className="logo">
          		<img src={logo} className="App-logo" alt="logo" />
      		</div>
      		<h1>The Red Sunflower</h1>
      		<nav className= "main-nav">
      			<ul className="main-menu">
      				<li className="menu-items">
      					<a href="#">Home</a>
      				</li>
      				<li className="menu-items">
      					<a href="#">About</a>
      				</li>
      				<li className="menu-items">
      					<a href="#">Contact</a>
      				</li>      				     				

      			</ul>
      		</nav>
      </div>
    );
  }
}

export default Header;