import React, { Component } from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from 'reactstrap'
import { render } from 'react-dom'

export default class CartSummary extends Component {

  renderCart() {
    return (
      <UncontrolledDropdown nav inNavbar right>
        <DropdownToggle nav caret>
          Sepetiniz
                </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName}
              <Badge>{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            Reset
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  renderEmpty() {
    return (
      <NavItem><NavLink>Empty Cart</NavLink></NavItem>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()}
      </div>
    )
  }
}
