import React, { Component } from 'react';
//import TransitionMenu from "./components/transition-menu/transition-menu";
import ActionBadge from "./components/action-badge/action-badge";
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
      <div style={{backgroundColor:"rgb(163, 197, 134)", borderTop:"8px solid #fc3"}}>  
        <div className="container">
          <div className="row">
            <ActionBadge 
              badgeType="basic-action"
              imgSrc="/images/register-for-school-icon.svg"
              heading="register for school"
              description="Register your kindergartner or new student here to begin their learning odyssey."
              link="#"/>

            <ActionBadge 
              badgeType="basic-action"
              imgSrc="/images/calendar-icon.svg"
              heading="view school calendar"
              description="Find out what events are happening in your school."
              link="#"/>
              
            <ActionBadge
              badgeType="basic-action"
              imgSrc="/images/lunch-menu-icon.svg"
              heading="view lunch menu"
              description="Find out what's for lunch, nutritious food prepared by our professionally trained chefs."
              link="#"/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;