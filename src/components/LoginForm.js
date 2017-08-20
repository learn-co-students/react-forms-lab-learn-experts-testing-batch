import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  submit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (username !== '' && password !== '') {
      this.props.onSubmit({
        username,
        password
      });
    }
  }

  handleInputChange = (event) => {
    event.target.id === 'test-username'
      ? this.setState({username: event.target.value})
      : this.setState({password: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
