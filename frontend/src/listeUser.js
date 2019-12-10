
import axios from 'axios';
import React from 'react';
import './listeUser.css'
//import { Button, Table, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const User = props => (
	<tr>

		<td> {props.user.location}</td>
		<td> {props.user.personsInHouse}</td>
		<td> {props.user.houseSize}</td>

	</tr>
)


class ListeUser extends React.Component {


	constructor(props) {

		super(props);
		
		this.state = {
			users: []
		};
	}


	componentDidMount(){
		axios.get('http://localhost:3001/users')
			.then(response => {
				this.setState({ users: response.data })
			})
			.catch((error) => { console.log(error) }); 
	}


	userList(){
		return this.state.users.map(currentUser =>{
			return <User user={currentUser} key={currentUser._id} />;
		})
	}

	render() {
		return (
			<div className="container">
			<h3> Liste User</h3>
				<table className=" mb-0 table table-borderless table-striped ">
					<thead className="thead-light">
				<tr>
					<th> Pays </th>
					<th> Nombre de personne dans la maison </th>
					<th> Taille Maison </th>
				</tr>
			</thead>
			<tbody className="test"> {this.userList()} </tbody>
			</table>
			</div>
		);
	}
}
export default ListeUser;