const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      charCount: 0,
      remainingChars: props.maxChars, 
      textValue: ''
    };

    this.handleTextValueChange = this.handleTextValueChange.bind(this)
  }

  handleTextValueChange(event) {
    this.setState({
      textValue: event.target.value,
      charCount: event.target.value.length, 
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.textValue} onChange={this.handleTextValueChange} />
        <div>{this.state.remainingChars} remaining characters</div>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

module.exports = TwitterMessage;
