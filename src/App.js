import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navi from './components/Navi'
import Categories from './components/Categories';
import Products from './components/Products';


export default class App extends Component {

  state = {
    selectedCategory : ""
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
            <Col xs="3"><Categories selectedCategory={this.state.selectedCategory} categoryClick={this.handleCategoryClick}/></Col>
            <Col xs="9"><Products /></Col>
          </Row>
        </Container>
      </div >
    )
  }
}