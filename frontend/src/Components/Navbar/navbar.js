import React, { useState, Component } from 'react';
import './navbar.css';
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

//Navbar from https://reactstrap.github.io/components/navbar/

/*const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);*/

class Navibar extends Component {
  rendre(){
    return (
      <div>
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
            <NavbarText>Simple Text</NavbarText>
          
        </Navbar>
      </div>
    );
  }
}

export default Navibar;