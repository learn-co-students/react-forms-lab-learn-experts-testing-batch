const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this);
    this.state = {
      message: '',
      counter: props.maxChars
    };
  }

  handleMessage(e){
    const content = e.target.value;

    if(content){
      this.setState({
        message: e.target.value,
        counter: this.props.maxChars - content.split('').length
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={this.handleMessage}
        />
        <p>Remaning chars: {this.state.counter}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
