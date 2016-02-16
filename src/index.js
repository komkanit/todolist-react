import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Input from './components/input';
import TodoList from './components/todolist';
var a = [];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [{
        title: "Hello",
        done: false
      }]
    };
  }
  addList(term) {
    this.state.todo.push({
      title: term,
      done: false
    });
    this.setState({
      todo: this.state.todo
    });
  }
  render(){
    return (
      <div>
        <Input onInputTermChange={this.addList.bind(this)} />
        <TodoList list={this.state.todo} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
