const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let val = e.target.value;
    this.setState({value: val});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        Characters Remaining: {this.props.maxChars - this.state.value.length }
      </div>
    );
  }
}

module.exports = TwitterMessage;
