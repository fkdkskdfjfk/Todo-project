import React from 'react';
import styled from "styled-components";

const TodoFrameWrapper = styled.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 6px;
  overflow: hidden;

  .title {
    height: 4rem;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    
  }
`;

function TodoFrame(props) {
  
  return (
    <TodoFrameWrapper>
      <div className='title'>일정 관리</div>
      <div className='content'>콘텐츠</div>   
    </TodoFrameWrapper>
  );
}

export default TodoFrame;