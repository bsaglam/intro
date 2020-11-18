import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class CartList extends Component {
    renderCartList = () => {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CategoryId</th>
                        <th>ProductName</th>
                        <th>UnitPrice</th>
                        <th>Units in Stock</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.cart.map((cartItem) => (
                        <tr key={cartItem.product.id}>
                            <td>{cartItem.product.Id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>{cartItem.quantity}</td>
                            <td><Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>Sil</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )


    }

    render() {
        console.log(this.props.cart.product)
        return (
            <div>
                {this.renderCartList()}
            </div>
        )
    }
}
