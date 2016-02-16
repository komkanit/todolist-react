import React, {Component} from 'react';

class TodoItem extends Component {
  componentWillMount() {
		this.setState({
			checked: false
		});
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
        {this.props.item.title}
      </li>
    );
  }
}
export default TodoItem;
