import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import '../styling/Dashboard.css'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
    this.deleteProduct = this.deleteProduct.bind(this)
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    this.getInventory()
  }

  deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
      .then(res => this.getInventory())
      .catch(err => console.log(err))
  }

  getInventory() {
    axios.get('/api/inventory')
      .then(res => this.setState({ products: res.data }))
  }

  // editProduct(product) {
  //   this.setState({
  //     currentProduct: product
  //   })
  // }

  render() {
    return (
      <div className="dashboard">
        {this.state.products.map(element => {
          return <Product
            key={element.id}
            data={element}
            deleteProduct={this.deleteProduct}
          />

        })}
      </div>
    )
  }
}
export default Dashboard