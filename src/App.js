import React, { Component } from 'react';
import TransitionMenu from './components/transition-menu/transition-menu';
import data from './models/transition-menu';
import './App.css';


class App extends Component {
  render() {
    return (  
      <div style={{height: 391, width: 241}}>

      <TransitionMenu listOfSlots={data}/>

      </div>
    );
  }
}

export default App;