const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit();
    }
  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username}
            onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password}
            onChange={this.handlePassword} />
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
