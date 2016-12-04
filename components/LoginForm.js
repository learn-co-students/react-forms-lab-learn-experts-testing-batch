const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.usernameInputChange = this.usernameInputChange.bind(this)
    this.passwordInputChange = this.passwordInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  usernameInputChange(event){
    this.setState({
      username: event.target.value
    })
  }

  passwordInputChange(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    if(this.state.username != "" && this.state.password != ""){
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.usernameInputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.passwordInputChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
