import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';
import './Components/styling/App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: [],
      currentProduct: {}
    }
    this.getInventory = this.getInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }
  componentDidMount() {
    this.getInventory()
  }
  getInventory() {
    axios.get('/api/inventory')
      .then(res => this.setState({ products: res.data }))
  }
  editProduct(product) {
    this.setState({
      currentProduct: product
    })
  }


  render() {
    return (
      <div className="App" >
        <Header />
        <Dashboard products={this.state.products} getInventory={this.getInventory} editProduct={this.editProduct} />
        <Form getInventory={this.getInventory} editProduct={this.editProduct} product={this.state.currentProduct} />
      </div>
    );
  }
}

export default App;
