import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showAndHidePassword = () => {
    this.setState(pre => ({isShowPassword: !pre.isShowPassword}))
  }

  successLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  failedLogin = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const apiLoginUrl = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiLoginUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.successLogin(data.jwt_token)
    } else {
      this.failedLogin(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const {username, password, showErrorMsg, errorMsg} = this.state

    return (
      <div className="login-route">
        <div className="form-card-container">
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <img
              className="website-logo-login"
              alt="website logo"
              src="https://res.cloudinary.com/dndtpnlzv/image/upload/v1678354949/Tasty%20Kitchen/website-login-logo-md_oapwsa.png"
            />
            <h1 className="login-form-heading">Login</h1>
            <h1 className="website-name-login">Tasty Kitchens</h1>
            <div className="input-boxes">
              <label className="login-input-label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="login-input"
                id="username"
                type="text"
                placeholder="USERNAME"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-boxes">
              <label className="login-input-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="login-input"
                id="password"
                type="password"
                onChange={this.onChangePassword}
                value={password}
                placeholder="PASSWORD"
              />
            </div>
            {showErrorMsg ? <p className="error-msg">*{errorMsg}</p> : null}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
        <div className="website-landing-img-container-md">
          <img
            className="website-bg-img-md"
            alt="website login"
            src="https://res.cloudinary.com/dndtpnlzv/image/upload/v1678352031/Tasty%20Kitchen/Rectangle_1456login-md-image_va4yyl.png"
          />
        </div>
      </div>
    )
  }
}

export default Login
