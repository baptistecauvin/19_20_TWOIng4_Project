import React, { Component } from 'react';
import axios from 'axios';
import './widget6.css';


class Widget6 extends Component {

  constructor(props) {

    super(props);

    this.state = {
      location: '',
      personInHouse: '',
      houseSize: '',
    }
  }

  componentDidMount(){
          //axios.get('http://localhost:3001/user/' + '5ddba3c0fc13ae6c90000514')
          axios.get('http://localhost:3001/user/5ddba3c0fc13ae6c90000514')
            .then(response => {
              this.setState({
                location: response.data.location,
                personsInHouse: response.data.personsInHouse,
                houseSize: response.data.houseSize,
            })
      })
      .catch((error) => { console.log(error) }); 
}


  render() {
    return (

      <div> 

        <h3>User Profil</h3>

        <div>Location: {this.state.location}</div>

        <div>Nombre de personne dans la maison: {this.state.personsInHouse}</div>

        <div>Taille de la maison: {this.state.houseSize}</div>

      </div>

      );
  }
}

export default Widget6;