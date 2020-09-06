import React from 'react'
import '../styling/Product.css'

export default function Product(props) {
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
        <button onClick={() => props.editProduct(props.data)}>Edit</button>
      </div>
    </div>
  )
}
