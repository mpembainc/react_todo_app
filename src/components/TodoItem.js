import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <p className="todoItem">
      {todo.title}
      <button className="btn btn-delete" onClick={() => onDelete(todo.id)}>
        delete
      </button>
    </p>
  );
}

export default TodoItem;
