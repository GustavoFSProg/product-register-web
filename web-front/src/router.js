import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Lista from './pages/Lista'
import Landing from './pages/Landing'
import User from './pages/User'

function Routes() {
  return (
    <>
      <Route path="/" exact component={Landing} />
      <Route path="/lista" component={Lista} />
      <Route path="/users" component={User} />
    </>
  )
}

export default Routes
