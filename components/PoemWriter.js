const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    }, function(){
      let lines = this.state.value.split(/\r\n|\r|\n/)
      if(lines.length === 3 &&
        lines[0].trim().split(" ").length === 5 &&
        lines[1].trim().split(" ").length === 3 &&
        lines[2].trim().split(" ").length === 5
      ){
        debugger;
        this.setState({
          valid: true
        })
      } else {
        this.setState({
          valid: false
        })
      }
    })
  }

  render() {
    const isValid = this.state.valid
    let error = null
    if(isValid){
      error =  ""
    } else {
      error =  <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    }
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value}/>
        {error}
      </div>
    );
  }
}

module.exports = PoemWriter;
