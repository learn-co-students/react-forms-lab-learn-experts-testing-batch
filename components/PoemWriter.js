const React = require('react');

const wordCount = (line) => line.split(' ').filter(l=> l).length
const validLines = 3
const firstLineWords = 5
const secondLineWords = 3
const thirdLineWords = 5

const poemValidator = (poem) => {
  const lines = poem.split('\n').filter(l=> l)
  return wordCount(lines[0] === firstLineWords && wordCount(lines[1]) === secondLineWords && wordCount(lines[2]) === thirdLineWords && lines.length === validLines)
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
    this.handlePoem = this.handlePoem.bind(this)
  }

  handlePoem(e){
    const value = e.target.value
    if(value){
      this.setState({
        value: value,
        isValid: poemValidator(value)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handlePoem} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
