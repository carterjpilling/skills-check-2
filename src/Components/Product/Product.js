import React from 'react'
import { withRouter } from 'react-router-dom'

import '../styling/Product.css'

function Product(props) {
  const { id, name, price, product_img } = props.data
  return (
    <div className="product-display">
      <div className="product-container">
        <div>{product_img}</div>
        <p>
          {name}
        </p>
        <p>
          {price}
        </p>
        <button onClick={() => props.deleteProduct(id)}>Delete</button>
        <button onClick={() => props.history.push(`/edit/${props.data.id}`)}>Edit</button>
      </div>
    </div>
  )
}

export default withRouter(Product)
