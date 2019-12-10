import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Formu from './formu';
import Routes from './routes';
import Widget from './Components/Widgets/widgets'

//Navbar from https://reactstrap.github.io/components/navbar/


class App extends Component {
  render() {
    return (
      <div className="test1">

      	<Router>
	        <Navbar color="light" light expand="md">

	          <NavbarBrand href="/">DashBoard</NavbarBrand>
	         
	            <Nav className="mr-auto" navbar>
	              <NavItem>
	                <NavLink href="/">Accueil</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink href="/formu">Formulaire</NavLink>
	              </NavItem>
	              
	            </Nav>
	        	<NavbarText >Hello</NavbarText>
	        	
	          
	    	</Navbar>

	    	<Switch>
        		<Route exact path="/" component={Widget} />
				<Route path="/formu" component={Formu} />
      		</Switch>

	    </Router>	


       
      </div>
    );
  }
}


export default App;