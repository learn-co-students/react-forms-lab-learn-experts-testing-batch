const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameText: '', 
      passwordText: ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({
      usernameText: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      passwordText: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    if (this.state.usernameText !== "" & this.state.passwordText !== "") {
      this.props.onSubmit({username: this.state.usernameText, password: this.state.passwordText})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameText} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordText} onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
}

module.exports = LoginForm;