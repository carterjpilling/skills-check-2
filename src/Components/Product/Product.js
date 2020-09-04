import React from 'react'

export default function Product(props) {
  const { id, name, price, product_img } = props.data
  return (
    <div className="product-display">
      <div>{product_img}</div>
      <p>
        {name}
      </p>
      <p>
        {price}
      </p>
      <button onClick={_ => props.deleteProduct(id)}>Delete</button>
    </div>
  )
}
