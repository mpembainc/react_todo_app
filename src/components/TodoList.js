import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => {
  return (
    <>
      <h1 className="title">my Todos List</h1>
      {props.todos
        .filter(todo => todo.owner === props.user.userId)
        .map(todo => (
          <TodoItem todo={todo} onDelete={props.onDelete} key={todo.id} />
        ))}
    </>
  );
};

export default TodoList;
