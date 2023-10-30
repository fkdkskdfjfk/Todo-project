import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import TodoRightListItem from './TodoRightListItem';

const TodoRightLowerListWrapper = styled.div`
  min-height: 300px;
  /* max-height: 300px; */
  overflow-y: auto;

  .subTitle {
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid #d82b2bbc;
  }
`;


function TodoRightLowerList(props) {
  const { todos, onToggle } = props;

  return (
    <TodoRightLowerListWrapper>
      <div className="subTitle">Priority</div>
      {/* <TodoRightListItem /> */}
      {todos && todos.map(todo => <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />)}
    </TodoRightLowerListWrapper>
  );
}

export default TodoRightLowerList;