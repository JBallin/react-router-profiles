import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'

const AppRouter = () => (
  <div>
    <Route exact path='/' render={() => <Redirect to="/login" />} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/profile' component={UserProfile} />
  </div>
);

export default AppRouter;
