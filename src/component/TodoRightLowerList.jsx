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
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 1px solid #d82b2bbc;
  }
`;


function TodoRightLowerList(props) {
  const { todos, onToggle } = props;
  let dayArray = [];
  // {todos && dayArray = todos.map((todo) => {dayArray.push(todo.dayTime)})}
  console.log(dayArray);

  const sortedTodos = todos.sort((a, b) => {
    if (a.dayTime > b.dayTime) return 1;
    if (a.dayTime < b.dayTime) return -1;
  });
  
  return (
    <TodoRightLowerListWrapper>
      {todos && todos.map((todo) => {dayArray.push(todo.dayTime.split('D')[1])})}

      <div className="subTitle">Priority</div>

      {todos && sortedTodos.map(todo => {
        return (
        <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />
        )
      })}
    </TodoRightLowerListWrapper>
  );
}

export default TodoRightLowerList;