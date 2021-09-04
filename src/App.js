import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Login from './pages/auth/Login'
import UserList from './pages/users/UserList'
import AddUser from './pages/users/AddUser'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/users' component={UserList} />
          <Route exact path='/users/add' component={AddUser} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
