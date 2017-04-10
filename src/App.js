import React, { Component } from 'react';
import ActionBadge from '../src/components/action-badge/action-badge';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="container">
            <div>
                <ActionBadge containerStyle={{backgroundColor: "#000000", borderRadius: "10%", margin: 40, width: 300, paddingLeft: 10, paddingRight: 10, textAlign: "center"}} 
                  imgSrc="https://api.grumpycats.com/images/57258a762c68d71cefbf043c22a9f87d9fd5bf72/aHR0cCUzQSUyRiUyRmJldGFsbGljLmNvbSUyRnRodW1icyUyRjYwMHg2MDAlMkZwYWdlaW1hZ2VzJTJGRVZfMjAxNiUyRjM1MjYwX0dydW1weVBhcnR5RmFjZS5lcHM%3D"
                   altTag="icon" imgClass={"img-circle"} imgStyle={{width: 140, height: 140, borderRadius: "50%"}} 
                   link="https://upload.wikimedia.org/wikipedia/commons/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg" linkedTitle="Click on this cat" titleStyle={{color: "#22bd10"}}
                   text="Click on this cat for something awesome!" textStyle={{color: "#cfcfcf"}}
                   />
            </div>
    </div>
    );
  }
}

export default App;
