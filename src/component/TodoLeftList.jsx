import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoLeftListWrapper = styled.div`
  min-height: 600px;
  /* max-height: 603px; */
  overflow-y: auto;
`;

function TodoLeftList(props) {
  const { todos, onRemove, onToggle, onView } = props;
  // console.log(todos);
  // console.log(todos[0]);

  return (
    <TodoLeftListWrapper>
      {todos && todos.map(todo => <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onView={onView}/>)}
    </TodoLeftListWrapper>
  );
}

export default TodoLeftList;