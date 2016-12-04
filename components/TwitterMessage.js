const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remainingChars: props.maxChars
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    }, function(){
      this.setState({
        remainingChars: this.props.maxChars - this.state.value.length
      })
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

module.exports = TwitterMessage;
