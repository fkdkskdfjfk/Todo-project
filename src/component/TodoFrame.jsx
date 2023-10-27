import React from 'react';
import styled from "styled-components";
import TodoLeftList from './TodoLeftList';
import TodoRightList from './TodoRightList';

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
    background: lightcoral;
    width: 50%;
  }

  .rightContent {
    background: lightgreen;
    width: 50%;

  }
`;

function TodoFrame(props) {
  const { todos, children } = props;

  return (
    <TodoFrameWrapper>
      <div className='title'>일정 관리</div>
      <div className='contentFunc'>기능들,
      
        <div className='inputTodo'>{children}</div>
      </div>
      <div className='content'>
        <div className='leftContent'>
          <TodoLeftList todos={todos}/>
        </div>

        <div className='rightContent'>
          <TodoRightList />
        </div>
      </div>   
    </TodoFrameWrapper>
  );
}

export default TodoFrame;