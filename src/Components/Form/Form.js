import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../styling/Form.css'
import logo from '../Images/devmountain.png'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      product_img: "",
      edit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    // console.log('Mount Hit')
    let { id } = this.props.match.params;
    if (id) {
      // console.log('If Hit')
      axios.get(`/api/product/${id}`)
        .then(res => {
          // console.log(res.data)
          this.setState({
            name: res.data[0].name,
            price: res.data[0].price,
            product_img: res.data[0].product_img,
            edit: true
          })
          // console.log(this.state)
          // console.log(res.data)
        })
    }
  }


  componentDidUpdate(prevProps) {
    // console.log('Didupdate hit')
    if (this.props.match.path !== prevProps.match.path) {
      this.setState({
        name: '',
        price: 0,
        product_img: ''
      })
    }
    // console.log(this.state)
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
        console.log(name, price, product_img)
        console.log(this.state)
        // console.log('hit .then')
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }
  handleCancel(e) {
    // console.log('hit cancel')
    if (this.props.match.params.id) {
      this.props.history.push('/')
    } else {
      this.setState({
        name: "",
        price: 0,
        product_img: ""
      })
    }
  }

  handleEditProduct() {
    console.log(this.props.match)
    let { id, name, price, product_img } = this.state
    let product = {
      id,
      name,
      price,
      product_img
    }
    axios.put(`/api/product/${this.props.match.params.id}`, product)
      .then(res => {
        console.log(name, price, product_img)
        console.log(this.state)
        // console.log('got inventory')
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.edit)
    return (
      <div className="form-display">
        <div className="form-container">
          {this.state.product_img
            ? <img src={this.state.product_img}></img>
            : <div className="default-logo"></div>}

          <div className="input-container">
            <p>Product Name:</p>
            <input type="text" onChange={this.handleChange} name="name" value={this.state.name}></input>
            <p>Product Price:</p>
            <input type="text" placeholder="Price" onChange={this.handleChange} name="price" value={this.state.price}></input>
            <p>Product Image</p>
            <input type="text" placeholder="Image URL" onChange={this.handleChange} name="product_img" value={this.state.product_img}></input>
          </div>
          <div className="form-button-container">
            <button onClick={_ => this.handleCancel()}>Cancel</button>
            {this.state.edit
              ? <button onClick={() => this.handleEditProduct()}>Save Changes</button>
              : <button onClick={() => this.handleSubmit()}>Add to Inventory</button>}
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Form)