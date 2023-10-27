import React from 'react';
import styled from 'styled-components';

const TodoLeftListWrapper = styled.div`
  min-height: 600px;
  /* max-height: 603px; */
  overflow-y: auto;
`;

function TodoLeftList(props) {
  return (
    <TodoLeftListWrapper>
      왼쪽
    </TodoLeftListWrapper>
  );
}

export default TodoLeftList;