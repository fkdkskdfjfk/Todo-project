import React from 'react';
import styled from "styled-components";
import TodoLeftList from './TodoLeftList';
import TodoRightUpperList from './TodoRightUpperList';

const TodoFrameWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 10px;
  overflow: hidden;
  /* position: relative; */

  .title {
    height: 4rem;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .contentFunc {
    /* height: 56px; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
  }
  
  .inputTodo {
    background: cyan;
  }
  
  .content {
    display: flex;
  }

  .leftContent {
    background: #d1acac;
    width: 50%;
  }

  .rightContent {
    background: lightgreen;
    width: 50%;

  }
`;

function TodoFrame(props) {
  const { todos, onRemove, onToggle, onView, onAmend, onInsert, rightTodos, children } = props;

  return (
    <TodoFrameWrapper>
      <div className='title'>일정 관리</div>
      <div className='contentFunc'>기능들,
      
        <div className='inputTodo'>{children}</div>
      </div>
      <div className='content'>
        <div className='leftContent'>
          <TodoLeftList todos={todos} onRemove={onRemove} onToggle={onToggle} onView={onView}/>
        </div>

        <div className='rightContent'>
          <TodoRightUpperList rightTodos={rightTodos} todos={todos} onAmend={onAmend} onInsert={onInsert}/>
        </div>
      </div>   
    </TodoFrameWrapper>
  );
}

export default TodoFrame;