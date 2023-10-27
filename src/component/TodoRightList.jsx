import React from 'react';
import styled from 'styled-components';
import TodoRightUpperList from './TodoRightUpperList';
import TodoRightLowerList from './TodoRightLowerList';

const TodoRightListWrapper = styled.div`
  min-height: 600px;
  /* max-height: 603px; */

  .rightUpper {
    min-height: 300px;
    overflow-y: auto;
  }

  .rightLower {
    min-height: 300px;
    overflow-y: auto;
  }
`;

function TodoRightList(props) {
  return (
    <TodoRightListWrapper>
      <div className='rightUpper'>
        <TodoRightUpperList />
      </div>

      <div className='rightLower'>
        <TodoRightLowerList />
      </div>
    </TodoRightListWrapper>
  );
}

export default TodoRightList;