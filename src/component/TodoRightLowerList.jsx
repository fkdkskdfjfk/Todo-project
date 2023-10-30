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
  // let dayArray = [];
  // {todos && dayArray = todos.map((todo) => {dayArray.push(todo.dayTime)})}
  // console.log(dayArray);
  // const negativeDday = todos.filter((todo) => {todo.dayTime < 0});

  const sortedTodos = [...todos].sort((a, b) => {
    console.log(a);
    console.log(Number(a.dayTime.split('D')[1]));
    if (Number(a.dayTime.split('D')[1]) < 0 && (Number(b.dayTime.split('D')[1]) < 0)) {
      if (Number(a.dayTime.split('D')[1]) < Number(b.dayTime.split('D')[1])) return 1;
      if (Number(a.dayTime.split('D')[1]) > Number(b.dayTime.split('D')[1])) return -1;
    } 
  });
  
  return (
    <TodoRightLowerListWrapper>
      {/* {todos && todos.map((todo) => {dayArray.push(Number(todo.dayTime.split('D')[1]))})} */}

      <div className="subTitle">Priority</div>

      {todos && sortedTodos.map(todo => <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />)}
    </TodoRightLowerListWrapper>
  );
}

export default TodoRightLowerList;