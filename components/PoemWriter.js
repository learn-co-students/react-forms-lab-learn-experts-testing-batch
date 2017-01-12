const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: '',
      showValidationError: false,
    };

    this.handleUpdatePoemText = this.handleUpdatePoemText.bind(this)
    this.validatePoemText = this.validatePoemText.bind(this)
    this.getLineLength = this.getLineLength.bind(this)
    this.validateLineLengths = this.validateLineLengths.bind(this)
  }

  handleUpdatePoemText(event) {
    const valid = this.validatePoemText(event.target.value)
    this.setState({
      poemText: event.target.value,
      showValidationError: !valid
    })
  }

  validatePoemText(text) {
    if (text.split('\n').length === 3) {
      const firstLine = text.split('\n')[0]
      const secondLine = text.split('\n')[1]
      const thirdLine = text.split('\n')[2]
      return this.validateLineLengths(firstLine, secondLine, thirdLine)
    } else {
      return false
    }
  }

  getLineLength(line) {
    return line.split(' ').filter(function(word){
      return word !== ""
    }).length
  }

  validateLineLengths(firstLine, secondLine, thirdLine) {
    if (this.getLineLength(firstLine) === 5 && this.getLineLength(secondLine) === 3 && this.getLineLength(thirdLine) === 5) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poemText} onChange={this.handleUpdatePoemText} />
        { this.state.showValidationError &&
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        }
      </div>
    );
  }
}

module.exports = PoemWriter;
