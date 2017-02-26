const React = require('react');

function lineCount(lines){
  return lines.length == 3 ? true : false
}

function wordCount(lines) {
  var firstLine = lines[0].split(" ").filter(l => l);
  var secondLine = lines[1].split(" ").filter(l => l);
  var thirdLine = lines[2].split(" ").filter(l => l);
  return firstLine.length == 5 && secondLine.length == 3 && thirdLine.length == 5 ? true : false;
}

function validatePoem(string) {
  if ( !string ){
    return false
  }
  var lines = string.split(/\r*\n/)
  return lineCount(lines) && wordCount(lines) ? true : false;
}



class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    }

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    this.setState({
      poem: event.target.value,
      isValid: validatePoem(event.target.value)
    })
  
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleInput}/>
        { this.state.isValid ? null : <div id="poem-validation-error" style={{color: "red"}}>This poem is not written in the right structure!</div> }
      </div>
    );
  }
}

PoemWriter.propTypes = {
  poem: React.PropTypes.string
}

module.exports = PoemWriter;
