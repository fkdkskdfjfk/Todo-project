import React from 'react';
import styled from 'styled-components';
import TodoRightListItem from './TodoRightListItem';

const TodoRightLowerListWrapper = styled.div`
  height: 300px;
  overflow-y: auto;
  &::-webkit-scrollbar {
      display: none;
  }

  .subTitle {
    width: 367px;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid #d82b2bbc;
    position: absolute;
    background: #F4bf96;
  }

  .base {
    margin-top: 40.5px;
  }
`;

function TodoRightLowerList(props) {
  const { todos, onToggle } = props;

  const sortedTodos = [...todos].sort((a, b) => {
    const numA = Number(a.dayTime.split('D')[1]);
    const numB = Number(b.dayTime.split('D')[1]);
    if ((numA < 0) && (numB < 0)) {
      if (numA < numB) return 1;
      if (numA > numB) return -1;
    } else if (numA > 0 && numB < 0) {
      return 1;
    } else if (numA < 0 && numB > 0) {
      return -1;
    } else return 0;
  });
  
  return (
    <TodoRightLowerListWrapper>
      <div className="subTitle">Priority</div>
      <div className="base">
        {todos && sortedTodos.map(todo => <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />)}
      </div>
    </TodoRightLowerListWrapper>
  );
}

export default TodoRightLowerList;