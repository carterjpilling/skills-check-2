import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../styling/Form.css'

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
          // console.log('Get Hit')
          this.setState({ ...res.data, edit: true })
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
    let { id, name, price, product_img } = this.state
    let product = {
      name,
      price,
      product_img
    }
    axios.put(`/api/product/${id}`, product)
      .then(res => {
        // console.log('got inventory')
        this.props.history.push('/')
        // this.props.getInventory()
        // this.handleCancel()
      })
      .catch(err => console.log(err))
  }

  render() {
    // console.log(this.state.edit)
    return (
      <div className="form-container">

        <input type="text" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.name}></input>
        <input type="text" placeholder="Price" onChange={this.handleChange} name="price" value={this.state.price}></input>
        <input type="text" placeholder="Image URL" onChange={this.handleChange} name="product_img" value={this.state.product_img}></input>
        <div>
          <button onClick={_ => this.handleCancel()}>Cancel</button>
          {this.state.edit
            ? <button onClick={() => this.handleEditProduct()}>Save Changes</button>
            : <button onClick={() => this.handleSubmit()}>Add to Inventory</button>
          }
        </div>

      </div>
    )
  }
}
export default withRouter(Form)