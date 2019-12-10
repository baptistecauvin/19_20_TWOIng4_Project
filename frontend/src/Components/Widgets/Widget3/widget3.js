import React, { Component } from 'react';
import axios from 'axios';
import './widget3.css';

class Widget3 extends Component {

  constructor(props) {

    super(props);

    this.state = {
      type: '',
      creationDate: "",
      value: '',
    }
  }

    componentDidMount(){
          //axios.get('http://localhost:3001/measure/' + '5ddbaac6fc13ae4b49000001')
          axios.get('http://localhost:3001/measure/5ddbaac6fc13ae4b49000001')
            .then(response => {
              this.setState({
                type: response.data.type,
                creationDate: response.data.creationDate,
                value: response.data.value,
            })
      })
      .catch((error) => { console.log(error) }); 
}

  render() {
    return (

      <div> 

        <h3>{this.state.type}</h3>

        <div>Il fait {this.state.value} °C</div>

        <div>Mesure effectuée à {this.state.creationDate}</div>

      </div>

      );
  }
}

export default Widget3;