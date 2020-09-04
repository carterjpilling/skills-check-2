import React, { Component } from 'react'
import axios from 'axios'
import '../styling/Form.css'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      id: null,
      name: "",
      price: 0,
      product_img: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidUpdate(prevProps) {
    let { id, name, price, product_img } = this.props.product
    if (prevProps.product.id !== this.props.product.id) {
      this.setState({
        id, name, price, product_img, edit: true
      })
    }
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
    if (this.state.id) {
      this.props.editProduct({})
    }
    this.setState({
      name: "",
      price: 0,
      product_img: ""
    })
  }

  handleEditProduct() {
    let { id, name, price, product_img } = this.state
    let product = {
      name,
      price,
      product_img
    }
    axios.put(`/api/product/${id}`, product)
      .then(res => {
        console.log('got inventory')
        this.props.getInventory()
        this.handleCancel()
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="form-container">

        <input type="text" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.name}></input>
        <input type="text" placeholder="Price" onChange={this.handleChange} name="price" value={this.state.price}></input>
        <input type="text" placeholder="Image URL" onChange={this.handleChange} name="product_img" value={this.state.product_img}></input>
        <div>
          <button onClick={_ => this.handleCancel()}>Cancel</button>
          {this.state.id
            ? <button onClick={_ => this.handleEditProduct()}>Save Changes</button>
            : <button onClick={_ => this.handleSubmit()}>Add to Inventory</button>
          }
        </div>

      </div>
    )
  }
}
export default Form