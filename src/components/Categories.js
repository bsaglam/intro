import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class Categories extends Component {

    state = {
        categories: [{ categoryId: 1, categoryName: "cat1" }, { categoryId: 2, categoryName: "cat2" }, { categoryId: 3, categoryName: "cat3" }],
        
    }
 
    render() {
        return (
            <div>
                <ListGroup>
                    {this.state.categories.map((category) =>
                        (
                            <ListGroupItem key={category.categoryId} onClick = {()=>this.props.categoryClick(category)}>{category.categoryName}</ListGroupItem>
                        ))}
                </ListGroup>
                <h4>{this.props.selectedCategory}</h4>
            </div>
        )
    }
}
