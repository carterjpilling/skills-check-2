import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'
import '../styling/Dashboard.css'

class Dashboard extends Component {
  constructor() {
    super()
    this.deleteProduct = this.deleteProduct.bind(this)
  }
  deleteProduct(id) {
    axios.delete(`/api/product/${id}`)
      .then(res => this.props.getInventory())
      .catch(err => console.log(err))

  }
  render() {
    return (
      <div className="dashboard">
        {this.props.products.map(element => {
          return <Product
            key={element.id}
            data={element}
            deleteProduct={this.deleteProduct}
            editProduct={this.props.editProduct} />

        })}
      </div>
    )
  }
}
export default Dashboard