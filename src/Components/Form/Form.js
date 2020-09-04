import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      product_img: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    // console.log('hit')
    let { name, price, product_img } = this.state
    let product = {
      name,
      price,
      product_img
    }
    // console.log('check1')
    axios.post('/api/product', product)
      // console.log('check2')
      .then(() => {
        // console.log('hit .then')
        this.props.getInventory();
        this.handleCancel();
      })
      .catch(err => console.log(err))
  }
  handleCancel(e) {
    console.log('hit cancel')
    this.setState({
      name: "",
      price: 0,
      product_img: ""
    })
  }

  render() {
    return (
      <div>

        <input type="text" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.name}></input>
        <input type="text" placeholder="Price" onChange={this.handleChange} name="price" value={this.state.price}></input>
        <input type="text" placeholder="Image URL" onChange={this.handleChange} name="product_img" value={this.state.product_img}></input>
        <div>
          <button onClick={_ => this.handleCancel()}>Cancel</button>
          <button onClick={_ => this.handleSubmit()}>Add to Inventory</button>
        </div>

      </div>
    )
  }
}
export default Form