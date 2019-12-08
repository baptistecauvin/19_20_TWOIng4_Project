import React, { Component } from 'react';
import './widget6.css';

class Widget6 extends Component {

  constructor() {
    super();
    this.state = {
      idUser: 1,
      location: "France",
      personInHouse: 5,
      houseSize: "medium"
    };
  }

  render() {
    return (

      <div> 

        <h3>User Profil</h3>

        <div>Id: {this.state.idUser}</div>

        <div>Location: {this.state.location}</div>

        <div>Nombre de personne dans la maison: {this.state.personInHouse}</div>

        <div>Taille de la maison: {this.state.houseSize}</div>

      </div>

      );
  }
}

export default Widget6;