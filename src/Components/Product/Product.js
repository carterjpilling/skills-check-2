import React from 'react'
import { withRouter } from 'react-router-dom'

import '../styling/Product.css'

function Product(props) {
  const { id, name, price, product_img } = props.data
  return (
    <div className="product-display">
      <div className="product-container">
        <img className="product_img" src={product_img}></img>
        <div className="product_detail_box">
          <p>
            {name}
          </p>
          <p>
            ${price}
          </p>
          <div className="button-container">
            <button onClick={() => props.deleteProduct(id)}>Delete</button>
            <button onClick={() => props.history.push(`/edit/${props.data.id}`)}>Edit</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withRouter(Product)
