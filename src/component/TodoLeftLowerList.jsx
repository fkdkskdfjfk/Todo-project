import React from 'react';
import styled from 'styled-components';
import TodoRightListItem from './TodoRightListItem';

const TodoLeftLowerListWrapper = styled.div`
  height: 300px;
  overflow-y: auto;
  border-top: 1px solid gray;
  
  &::-webkit-scrollbar {
    display: none;
  }

  .leftLowerTitle {
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

function TodoLeftLowerList(props) {
  const { todos, onToggle } = props;

  return (
    <TodoLeftLowerListWrapper>
      <div className="leftLowerTitle">Completed</div>
      {/* {todos && todos.map((todo) => todo.checked && <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />)} */}
      <div className='base'>
        {todos && todos.filter(todo => todo.checked).map(todo => <TodoRightListItem key={todo.id} todo={todo} onToggle={onToggle} />)}

      </div>
    </TodoLeftLowerListWrapper>
  );
}


export default TodoLeftLowerList;