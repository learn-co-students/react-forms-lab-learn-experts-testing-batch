const React = require('react');

function countWords(text) {
    return text.split(' ').filter(w => w).length;
}

function isValidContent(text) {
    const lines = text.split('\n');
    const isThreeLines = lines.length === 3;
    const isRightLength = countWords(lines[0]) === 5
                            && countWords(lines[1]) === 3
                            && countWords(lines[2]) === 5;

    return isThreeLines && isRightLength;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
        innerText: '',
        isValid: false
    };

    this.setText = this.setText.bind(this);
  }

  setText(e) {
      const text = e.target.value;
      if(text) {
          this.setState({
              innerText: text,
              isValid: isValidContent(text)
          });
      }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60"  value={this.state.innerText} onChange={this.setText} />
        {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> }
      </div>
    );
  }
}

PoemWriter.propTypes = {
    innerText: (props, propName) => {
        const text = props
    }
}


module.exports = PoemWriter;
