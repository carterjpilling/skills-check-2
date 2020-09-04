import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      imgURL: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCancel(e) {
    this.setState({
      name: "",
      price: 0,
      imgURL: ""
    })
  }


  render() {
    return (
      <div>

        <input placeHolder="Name" onChange={this.handleChange} name="name" value={this.state.name}></input>
        <input placeHolder="Price" onChange={this.handleChange} name="price" value={this.state.price}></input>
        <input placeHolder="Image URL" onChange={this.handleChange} name="imgURL" value={this.state.imgURL}></input>
        <div>
          <button onClick={_ => this.handleCancel()}>Cancel</button>
          <button>Add</button>
        </div>

      </div>
    )
  }
}
export default Form