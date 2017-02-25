const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(e){
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }

  handleSubmit(e){
    if (!this.state.username || !this.state.password){
      e.preventDefault();
      console.error("This form is invalid");
    } else {
      e.preventDefault()
      this.props.onSubmit(e);
    }
  }


  render() {
    return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" 
            value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" 
            value={this.state.password} onChange={this.handlePasswordChange} />
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
