import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../actions/auth.actions'

const Logout = (props) => {
  props.userLogout();
  return <Redirect to="/login" />;
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Logout)
