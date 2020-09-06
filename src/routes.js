import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import { Switch, Route } from 'react-router-dom'
import NotFound from ''

export default (
  <Switch>
    <Route exact path='/' component={Dashboard}></Route>
    <Route path='/add' component={Form}></Route>
    <Route path='edit/:id' component={Form}></Route>
    <Route component={NotFound} />
  </Switch>
)