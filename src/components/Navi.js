import React, { Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'
 import CardSummary from './CartSummary'

export default class Navi extends Component {
   
    toggle = ()=>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">NorthWind App</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <CardSummary cart={this.props.cart}/>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </div>
        )
    
        }
        } 
