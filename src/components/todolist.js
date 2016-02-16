import React from 'react';
import TodoItem from './todoitem';
const TodoList = (props) =>{
  const todoItems = props.listItem.map((element, id) =>{
    return (
      <TodoItem key={id} item={element}/>
    );
  });
  return (
    <ul>
      {todoItems}
    </ul>
  );
}
export default TodoList;
