import React from 'react'
class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleMessage = this.handleMessage.bind(this)
    this.state = {
      message: '',
      counter: props.maxChars
    };
  }

  handleMessage(event){
    const content = event.target.value
    if(content){
      this.setState({
        message: content,
        counter: this.props.maxChars - content.split(' ').length
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleMessage} />
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
