import React, { Component } from 'react';
import './App.css';
import Home from './pages/home'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    isOnBuyNow: false
  }

  onBuyNow = () => {
    this.setState({
      isOnBuyNow: true
    })
  }

  render() {
    return (
      <div className="App">
        <Home onBuyNow={this.onBuyNow} />
      </div>
    );
  }
}

export default App;


//Duoc : make info-order page.
//Long: make home page.