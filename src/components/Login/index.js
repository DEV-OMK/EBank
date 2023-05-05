import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  MainContainer,
  ResponsiveContainer,
  LoginCard,
  LoginImage,
  FormCard,
  FormTitle,
  LoginButton,
  ErrorMsg,
  InputLabel,
  UserInput,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    showError: false,
    errorMsg: '',
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginDetails = async event => {
    event.preventDefault()

    const {userId, pin} = this.state
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {
      user_id: userId,
      pin,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      const errorMsg = data.error_msg
      this.setState({
        errorMsg,
        showError: true,
      })
    }
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  renderUserIdField = () => {
    const {userId} = this.state

    return (
      <>
        <InputLabel htmlFor="userId">User ID</InputLabel>
        <UserInput
          type="text"
          id="userId"
          value={userId}
          placeholder="Enter User ID"
          onChange={this.onChangeUserId}
        />
      </>
    )
  }

  renderPinField = () => {
    const {pin} = this.state

    return (
      <>
        <InputLabel htmlFor="pin">PIN</InputLabel>
        <UserInput
          type="password"
          id="pin"
          value={pin}
          placeholder="Enter PIN"
          onChange={this.onChangePin}
        />
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContainer>
        <ResponsiveContainer>
          <LoginCard>
            <LoginImage
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
              alt="website login"
            />
            <FormCard onSubmit={this.onSubmitLoginDetails}>
              <FormTitle>Welcome Back!</FormTitle>
              {this.renderUserIdField()}
              {this.renderPinField()}
              <LoginButton type="submit">Login</LoginButton>
              {showError && <ErrorMsg>{errorMsg}</ErrorMsg>}
            </FormCard>
          </LoginCard>
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default Login
