import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Lista from './pages/Lista'
import Landing from './pages/Landing'
import User from './pages/User'
import ProductsUpdate from './pages/ProductsUpdate'

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/lista" component={Lista} />
        <Route path="/users" component={User} />
        <Route path="/productsUpdate" component={ProductsUpdate} />
      </Switch>
    </>
  )
}

export default Routes
