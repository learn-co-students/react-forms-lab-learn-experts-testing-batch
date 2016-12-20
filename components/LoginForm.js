const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    this.changeUsername = this.changeUsername.bind(this)
    this.changePass = this.changePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  changePass(e){
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
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
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePass} />
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
