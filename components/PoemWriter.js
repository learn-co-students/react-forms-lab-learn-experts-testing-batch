const React = require('react');

function countWords(line) {
  return line.toString().split(" ").filter(l => l).length;
}

function isValidPoem(poem) {
  const lines = poem.split('\n').filter(l => l);
  const threeLines = lines.length === 3;
  const rightAmountOfWords = (countWords(lines[0]) === 5) && (countWords(lines[1] === 3) && (countWords(lines[2]) === 5));
  return threeLines && rightAmountOfWords;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false,
    };

    this.poemWriter = this.poemWriter.bind(this);
  }

  poemWriter(event) {
    const poemContent = event.target.value

    if (poemContent) {
      this.setState({
        poem: poemContent,
        isValid: isValidPoem(poemContent),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemWriter}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
