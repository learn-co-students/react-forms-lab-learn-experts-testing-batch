const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
    this.messageChange = this.messageChange.bind(this)
  }

  messageChange(x){
    this.setState({
      message: x.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.messageChange} />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
