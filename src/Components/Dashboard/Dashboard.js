import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

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
      <div>
        {this.props.products.map(element => {
          return <Product
            key={element.id}
            data={element}
            deleteProduct={this.deleteProduct} />

        })}
      </div>
    )
  }
}
export default Dashboard