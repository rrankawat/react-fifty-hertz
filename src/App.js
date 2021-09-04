import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/auth/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  )
}

export default App
