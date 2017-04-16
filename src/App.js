import React, { Component } from 'react';
//import TransitionMenu from "./components/transition-menu/transition-menu";
import ActionBadge from "./components/action-badge/action-badge";
import './App.scss';
import './components/action-badge/action-badge.scss';

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
    <div style={{backgroundColor:"green"}}>

      <ActionBadge 
        badgeType="basic-action"
        imgSrc="/images/calendar-icon.svg"
        heading="view school calendar"
        description="Find out what events are happening in your school."/>

    </div>
    );
  }
}

export default App;