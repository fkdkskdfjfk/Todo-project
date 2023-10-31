import React from 'react';
import styled from 'styled-components';
import TodoRightListItem from './TodoRightListItem';

const TodoLeftLowerListWrapper = styled.div`
  height: 300px;
  overflow-y: auto;
  border-top: 1px solid gray;

  .leftLowerTitle {
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid #d82b2bbc;
  }
`;

function TodoLeftLowerList(props) {
  const { todos, onToggle } = props;

  return (
    <TodoLeftLowerListWrapper>
      <div className="leftLowerTitle">Completed</div>
      {todos && todos.map((todo) => todo.checked && <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />)}
    </TodoLeftLowerListWrapper>
  );
}


export default TodoLeftLowerList;