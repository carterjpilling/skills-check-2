import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.getInventory()
  }
  getInventory() {
    Axios.get('/api/inventory')
      .then(res => this.setState({ products: res.data }))
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
