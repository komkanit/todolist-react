import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import TodoList from './components/todolist';
var a = [];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }
  addList(term) {
    this.state.todos.push(term);
    this.setState({
      todos: this.state.todos
    });
  }
  render(){
    return (
      <div>
        <Input onInputTermChange={this.addList.bind(this)} />
        <TodoList listItem={this.state.todos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('content'));
