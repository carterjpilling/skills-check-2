import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './Components/styling/App.css'
import { Switch, Route, withRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/add' component={Form} />
        <Route path='/edit/:id' component={Form} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
