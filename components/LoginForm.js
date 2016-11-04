const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.changeInputState = this.changeInputState.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  changeInputState(field, event){
    this.setState({
      [field]: event.target.value
    })
  }

  submitState(ev){
    ev.preventDefault();
    const {username, password } = this.state;

    if(!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  render() {
    return (
      <form onSubmit={this.submitState}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeInputState.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changeInputState.bind(this, 'password')}/>
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
