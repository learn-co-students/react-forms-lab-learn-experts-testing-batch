const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        message: ''
    };

    this.setMessage = this.setMessage.bind(this);
  }

  setMessage(e) {
      this.setState({
          message: e.target.value
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.setMessage} />
        <small>{this.props.maxChars - this.state.message.length}</small>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
    maxChars: React.PropTypes.number
};

TwitterMessage.defaultProps = {
    maxChars: 140
};

module.exports = TwitterMessage;
