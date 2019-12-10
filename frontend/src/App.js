import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './App.css';
import Widget from './Components/Widgets/widgets'

//Navbar from https://reactstrap.github.io/components/navbar/


class App extends Component {
  render() {
    return (
      <div className="test1">

	        <Navbar color="light" light expand="md">

	          <NavbarBrand href="/">DashBoard</NavbarBrand>
	         
	            <Nav className="mr-auto" navbar>
	              <NavItem>
	                <NavLink href="/">Accueil</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="/">Formulaire</NavLink>
	              </NavItem>
	              
	            </Nav>
	        	<NavbarText >Hello</NavbarText>
	          
	    	</Navbar>


        	<Widget/>
      </div>
    );
  }
}


export default App;