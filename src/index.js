import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Put React on the window for React tools
if (window !== undefined) {
  window.React = React;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
