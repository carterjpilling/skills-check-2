import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
  render() {
    return (
      <div>
        {this.props.products.map(element => {
          return <Product
            key={element.id}
            data={element} />

        })}
      </div>
    )
  }
}
export default Dashboard