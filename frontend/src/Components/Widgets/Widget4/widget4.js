import React, { Component } from 'react';
import './widget4.css';

class Widget4 extends Component {

  constructor() {
    super();
    this.state = {
      type: "Humidité",
      valeur: 50,
      date: "03/12/2019"
    };
  }

  render() {
    return (

      <div> 

        <h3>{this.state.type}</h3>

        <div>Il y a {this.state.valeur}% d'humidité dans l'air</div>

        <div>Mesure effectuée à {this.state.date}</div>

      </div>

      );
  }
}

export default Widget4;