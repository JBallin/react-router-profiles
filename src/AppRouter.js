import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import Login from './components/Login'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'

const NoMatch = () => (
  <Container className="main-wrapper mt-5">
    <h3>404: Not Found</h3>
  </Container>
);

const AppRouter = () => (
  <Switch>
    <Route path='/' exact render={() => <Redirect to="/login" />} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/profile' component={UserProfile} />
    <Route component={NoMatch} />
  </Switch>
);

export default AppRouter;
