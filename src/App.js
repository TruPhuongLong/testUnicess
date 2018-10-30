import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Benifit from './components/benefit'
import Home from './pages/home'
import InfoOrder from './pages/info-order'
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
        {
          this.state.isOnBuyNow ?
            <InfoOrder /> :
            <Home onBuyNow={this.onBuyNow} />

        }
      </div>
    );
  }
}

export default App;


//Duoc : make info-order page.
//Long: make home page.