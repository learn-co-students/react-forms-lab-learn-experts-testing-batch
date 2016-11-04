const React = require('react');

function countWords(line){
  return line.split(' ').filter(f => f).length;
}

function validPoem(poem){
  var lines = poem.split('\n').filter(l => l);
  var correctLineCount = lines.length === 3;
  var correctWordCount = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;

  return correctLineCount && correctWordCount;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false
    };

    this.setPoemContent = this.setPoemContent.bind(this);
  }

  setPoemContent(ev){
    const content = ev.target.value
    if(content){
      this.setState({
        content: content,
        isValid: validPoem(content)
      })
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
