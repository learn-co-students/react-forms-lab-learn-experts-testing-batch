const React = require('react');

const wordCount = (line) => line.split(' ').filter(l=> l).length
const validLines = 3
const firstLineWords = 5
const secondLineWords = 3
const thirdLineWords = 5

const isValidPoem = (poem) => {
  const lines = poem.split('\n').filter(l =>l);
  console.log('authorized', wordCount(lines[0]) === firstLineWords && wordCount(lines[1]) === secondLineWords && wordCount(lines[2]) === thirdLineWords && lines.length === validLines)
  return wordCount(lines[0]) === firstLineWords && wordCount(lines[1]) === secondLineWords && wordCount(lines[2]) === thirdLineWords && lines.length === validLines

}
class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false
    };

    this.setPoemContent = this.setPoemContent.bind(this)
  }

  setPoemContent(ev){
    const content = ev.target.value;

    if(content){
      this.setState({
        content:content,
        isValid: isValidPoem(content)
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
