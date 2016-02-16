import React, {Component} from 'react';
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div className='input-bar'>
          <input
          onChange={event => this.onInputChange(event)}
          onKeyDown={event => this.onKeyDown(event)}
          />
      </div>
    );
  }
  onKeyDown(e){
    if(e.which === 13){
      this.props.onInputTermChange(this.state.term);
      e.target.value = '';
    }
  }
  onInputChange(e){
    this.setState({term: e.target.value});
  }
}
export default Input;
