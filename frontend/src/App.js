import React, { Component } from 'react';
import './App.css';
import Widget from './Components/Widgets/widgets'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Widget/>
      </div>
    );
  }
}


export default App;

