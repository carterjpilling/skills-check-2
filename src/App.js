import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor() {
    super()

    this.state = {
      products:
        [{ name: 'apple', price: 3, product_img: 'asdf' }, { name: 'grape', price: 3, product_img: 'asdf' }, { name: 'banana', price: 3, product_img: 'asdf' }]


    }
  }
  render() {
    return (
      <div className="App" >
        <Dashboard products={this.state.products} />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
