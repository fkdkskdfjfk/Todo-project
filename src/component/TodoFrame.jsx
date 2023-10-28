import React, { useEffect, useState } from 'react';
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
    font-size: 2rem;
    font-weight: bold;
  }
  
  .contentFunc {
    /* height: 56px; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
  }
  
  .styledDate {
    width: 300px;
    height: 56px;
    background: #788a9b;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
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

  const [time, setTime] = useState(new Date());

  return (
    <TodoFrameWrapper>
      <div className='title'>일정 관리 앱</div>
      <div className='contentFunc'>
        <div className='styledDate'>
          {'오늘 날짜: '+time.toLocaleDateString()}
          {console.log(time.getTime())}
        </div>
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