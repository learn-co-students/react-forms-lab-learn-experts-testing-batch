const React = require('react');

function checkPoem(poem) {
  const strArr = poem.split('\n').filter(l => l)
  const numOfLines = strArr.length === 3;
  const numOfWords = checkWordCount(strArr[0]) === 5 && checkWordCount(strArr[1]) === 3 && checkWordCount(strArr[2]) === 5;
  return numOfLines && numOfWords;
}

function checkWordCount(str) {
  return str.split(' ').filter(l => l).length
}


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValidPoem: false
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const str = e.target.value

    if (str) {
      this.setState({
        text: str,
        isValidPoem: checkPoem(str)
      })
    }

    // this.checkPoem(this.state.text)
    console.log(this.state.text)
  }

  // checkPoem(poem) {
  //   const strArr = poem.split('\n')
  //   console.log(strArr)
  // }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleChange}/>
        {!this.state.isValidPoem ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
