import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem) {
  const lines = poem.split('\n').filter(l => l);
  const rightLineCount = lines.length === 3;
  const rightWordCount = countWords(lines[0]) === 5 &&
                         countWords(lines[1]) === 3 &&
                         countWords(lines[2]) === 5;
  return rightLineCount && rightWordCount;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }
  
  handleInputChange = (event) => {
    const value = event.target.value;
    if (value) {
      this.setState({
        value,
        isValid: isValidPoem(value)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea 
          rows="3" 
          cols="60" 
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        {
          !this.state.isValid ?
          <div 
            id="poem-validation-error" 
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
          : <div></div>
        }
      </div>
    );
  }
}

export default PoemWriter;
