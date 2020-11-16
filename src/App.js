import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navi from './components/Navi'
import Categories from './components/Categories';
import Products from './components/Products';


export default class App extends Component {

  state = {
    selectedCategory: "", products: []
  }
  componentDidMount() {
    this.getProducts()
  }

  getProducts = () =>
  {
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => this.setState({ products : data}))
  }

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category.categoryName })
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col><Navi /></Col>
          </Row>
          <Row>
            <Col xs="3"><Categories selectedCategory={this.state.selectedCategory} categoryClick={this.handleCategoryClick} /></Col>
            <Col xs="9"><Products selectedCategory={this.state.selectedCategory} products={this.state.products}/></Col>
          </Row>
        </Container>
      </div>
    )
  }
}