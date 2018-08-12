import React, { Component } from 'react';
import './App.css';

//components
import Header from './Components/headerComponent/header';
import Body from './Components/bodyComponent/body';
import Footer from './Components/footerComponent/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Body />

        <Footer />

      </div>
    );
  }
}

export default App;
