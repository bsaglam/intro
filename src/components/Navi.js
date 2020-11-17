import React, { Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'
 

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
                  <UncontrolledDropdown nav inNavbar right>
                    <DropdownToggle nav caret>
                      {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </div>
        )
    
        }
        } 
