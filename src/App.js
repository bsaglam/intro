import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Navi from './components/Navi'
import Categories from './components/Categories';
import Products from './components/Products';
import alertify from 'alertifyjs';
import { Switch, Route } from 'react-router-dom'
import CartList from './components/CartList'
import NotFound from './components/NotFound'
import Form1 from './components/Form1'
export default class App extends Component {

  state = {
    selectedCategory: "", products: [], cart: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = (categoryId) => {

    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  handleCategoryClick = (category) => {
    this.setState({ selectedCategory: category.categoryName })
    this.getProducts(category.id)
  }

  //sepete ürün ekleme
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(i => i.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1 // addedItem daki bu değişiklik state içindeki quantityi nasıl etkiliyor anlamıyorum
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart }) // oluşan bu state i de navi ye göndermemiz gerekiyor.
    alertify.success(product.productName + " added")
  }
  //seepetten ürün silme
  removeFromCart = (product) => {
    let filterCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: filterCart })
    alertify.error(product.productName + " removed")
  }
  
  
  render() {
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3"><Categories selectedCategory={this.state.selectedCategory} categoryClick={this.handleCategoryClick} /></Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <Products
                    selectedCategory={this.state.selectedCategory}
                    products={this.state.products}
                    addToCart={this.addToCart} />
                )} />
                <Route path="/cart" render={props=>(
                 
                  <CartList  {...props} cart={this.state.cart} removeFromCart={this.removeFromCart}/>
                )}/>
                <Route path="/form1" component={Form1}/>
                <Route component={NotFound}/>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}