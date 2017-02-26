const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <span>{this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes ={
  maxChars: React.PropTypes.number
}

TwitterMessage.defaultprops = {
  maxChars: 140
}

module.exports = TwitterMessage;
