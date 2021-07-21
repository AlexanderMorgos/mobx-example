import React from 'react';

import Todo from './Todo';

export const TodoList = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, text }) => {
        return <Todo key={id} text={text} />
      })}
    </ul>
  );
}