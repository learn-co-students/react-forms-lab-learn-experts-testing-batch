const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      validPoem: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.validatePoem = this.validatePoem.bind(this)
  }

  handleChange(e){
    this.setState({value: e.target.value})
    this.validatePoem(e.target.value)
  }

  validatePoem(value){
    let poemArr = value.split("\n");
    let re = /\b\w+\b/g
    if( poemArr.length === 3 && poemArr[0].match(re).length == 5 && 
        poemArr[1].match(re).length == 3 && poemArr[2].match(re).length == 5){
      this.setState({validPoem: true})
    } else {
       this.setState({validPoem: false})
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange= {this.handleChange}/>
        {!this.state.validPoem ? <div id="poem-validation-error" style={{color: 'red'}} >
           This poem is not written in the right structure! 
        </div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;


// This is poem
// It should be valid poem
// let us see 