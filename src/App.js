import React, { Component } from 'react';
import Cryptos from './components/Cryptos'
//import Form from './components/Form'
//import Results from './components/Results'
import './App.css';



class App extends Component {

  state = { 
    coins: []
  }

  componentDidMount() {
      
  }



  render() {
    return (
      <div className="App">
      <Cryptos/>
  
      </div>
    );
  }
}

export default App;
