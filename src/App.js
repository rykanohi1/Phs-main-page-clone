import React, { Component } from 'react';
import TransitionMenu from "./components/transition-menu/transition-menu";
import './App.css';

const data = [{
    imgSrc: "/images/Woody.jpg",
    title: "test",
    description: "this is test number 1 for the transition menu"
  },
  {
    imgSrc: "/images/Rome.jpg",
    title: "test",
    description: "this is test number 2 for the transition menu"
  },
  {
    imgSrc: "/images/serveimage.jpg",
    title: "test",
    description: "this is test number 3 for the transition menu"
  }
];

class App extends Component {
  render() {
    return ( 
    <div>

      <TransitionMenu listOfSlots={data}/>

    </div>
    );
  }
}

export default App;