import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { connect } from 'react-redux'

class TopNav extends React.Component {
  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const loginAndSignupLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/login" className="nav-link" exact>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </NavItem>
      </Nav>
    );

    const logoutLink = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/logout" className="nav-link" exact>Logout</NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">ProfileHub</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { this.props.user.email ? logoutLink : loginAndSignupLinks }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps, null)(TopNav)
