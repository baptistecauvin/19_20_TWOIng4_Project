import React, { Component } from 'react';
import './widget5.css';

class Widget5 extends Component {

  constructor() {
    super();
    this.state = {
      type: "Pollution",
      valeur: 367,
      date: "01/12/2019"
    };
  }

  render() {
    return (

      <div> 

        <h3>{this.state.type}</h3>

        <div>Il y a {this.state.valeur}ppm dans l'air</div>

        <div>Mesure effectuée à {this.state.date}</div>

      </div>

      );
  }
}

export default Widget5;