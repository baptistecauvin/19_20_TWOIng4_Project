import React, { Component } from 'react';
import './widget3.css';

class Widget3 extends Component {

  constructor() {
    super();
    this.state = {
      type: "Temperature",
      valeur: 20,
      date: "02/12/2019"
    };
  }

  render() {
    return (

      <div> 

        <h3>{this.state.type}</h3>

        <div>Il fait {this.state.valeur} °C</div>

        <div>Mesure effectuée à {this.state.date}</div>

      </div>

      );
  }
}

export default Widget3;