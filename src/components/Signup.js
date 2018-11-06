import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../actions/auth.actions'
import { Redirect } from 'react-router-dom'

export class Signup extends Component {
  state = {
    isValid: true,
    passwordClasses: 'form-control',
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    photo_url: '',
    password: '',
    verify_password: '',
    isSignedUp: false,
  }

  getRandomImage = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const [width, height] = [350, 450];
    const IMAGE_API_URL = `${API_URL}/random-image?w=${width}&h=${height}`
    return fetch(IMAGE_API_URL).then(r => r.json());
  }

  userSignup = async (e) => {
    e.preventDefault()
    let { name, email, company, phone, password, verify_password, address, photo_url } = this.state
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
      })
    } else {
      if (!photo_url) {
        const photo = await this.getRandomImage();
        photo_url = photo.img_url;
      }
      let newUser = {name, email, company, phone, password, address, photo_url}
      this.props.userSignup(newUser)
      this.setState({ isSignedUp: true })
    }
  }

  render() {
    if (this.state.isSignedUp) {
      return <Redirect to="/login" />
    }

    const redAsterisk = <span style={{color: 'red'}}>*</span>;

    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.userSignup}>
              <FormGroup>
                <Label for="name">Name { redAsterisk }</Label>
                <Input
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="name"
                  value={this.state.name}
                  onChange={e =>
                    this.setState({ name: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email { redAsterisk }</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e =>
                    this.setState({ email: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="company">Company { redAsterisk }</Label>
                <Input
                  type="text"
                  name="company"
                  id="company-field"
                  placeholder="company"
                  value={this.state.company}
                  onChange={e =>
                    this.setState({ company: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Phone { redAsterisk }</Label>
                <Input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone-field"
                  placeholder="123-456-7890"
                  value={this.state.phone}
                  onChange={e =>
                    this.setState({ phone: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address { redAsterisk }</Label>
                <Input
                  type="text"
                  name="address"
                  id="address-field"
                  placeholder="address"
                  value={this.state.address}
                  onChange={e =>
                    this.setState({ address: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="photo_url">Photo URL</Label>
                <Input
                  type="url"
                  name="photo_url"
                  id="photo-url"
                  placeholder="photo url"
                  value={this.state.photo_url}
                  onChange={e =>
                    this.setState({ photo_url: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password { redAsterisk }</Label>
                <Input
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e =>
                    this.setState({ password: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password { redAsterisk }</Label>
                <Input
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="password"
                  value={this.state.verify_password}
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                  required
                />
                {!this.state.isValid ? (
                  <Alert color="danger">Passwords do not match</Alert>
                ) : null}
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup)
