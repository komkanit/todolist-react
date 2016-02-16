import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
		this.state = {
			checked: false
		};
	}
  onChange(e) {
    this.setState({
      checked: !this.state.checked
    });
  }
  render(){
    return (
      <li style={{
				textDecoration: this.state.checked ? "line-through": "none"
			}}>
        <input
					type="checkbox"
					onChange={this.onChange.bind(this)}
				/>
        {this.props.item}
      </li>
    );
  }
}
export default TodoItem;
