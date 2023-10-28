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
    background: #22b8cf;
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
    background: #cab7b7;
    width: 50%;
  }

  .rightContent {
    background: #cab7b7;
    width: 50%;
    border-left: 1px solid gray;
  }
`;

function TodoFrame(props) {
  const { todos, onRemove, onToggle, onView, onAmend, rightTodos, children } = props;
  // const title = rightTodos[0].text;
  // console.log(title);
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
          <TodoRightUpperList rightTodos={rightTodos} onAmend={onAmend} />
        </div>
      </div>   
    </TodoFrameWrapper>
  );
}

export default TodoFrame;