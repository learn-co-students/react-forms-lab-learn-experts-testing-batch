const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(field, e) {
      this.setState({
          [field]: e.target.value
      })
  }

  submitHandler(e) {
      e.preventDefault();
      const {username, password} = this.state;

      if(!username ||  !password) {
          return;
      }

      this.props.onSubmit({
          username,
          password
      })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.inputChange.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.inputChange.bind(this, 'password')}/>
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
