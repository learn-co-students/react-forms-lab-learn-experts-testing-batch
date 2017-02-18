import React from 'react'
class LoginForm extends React.Component {
  constructor(){
    super()

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleNameChange(event) {
    this.setState({username: event.target.value})
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.onSubmit()
    }
  }

  render () {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
}

module.exports = LoginForm
