const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
    this.addToMessage = this.addToMessage.bind(this);
  }
  addToMessage(ev){
    this.setState({
      message: ev.target.value
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.addToMessage} type="text" />
        <span>Characters Remaining: {this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes= {
  maxChars: React.PropTypes.number
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

module.exports = TwitterMessage;
