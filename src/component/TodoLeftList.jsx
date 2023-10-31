import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoLeftListWrapper = styled.div`
  height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function TodoLeftList(props) {
  const { todos, onRemove, onToggle, onView } = props;

  return (
    <TodoLeftListWrapper>
      {todos && todos.map(todo => !todo.checked && <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onView={onView}/>)}
    </TodoLeftListWrapper>
  );
}

export default TodoLeftList;