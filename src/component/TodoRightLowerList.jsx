import React from 'react';
import styled from 'styled-components';

const TodoRightLowerListWrapper = styled.div`
  min-height: 160px;
  max-height: 300px;
  overflow-y: auto;
`;

function TodoRightLowerList(props) {
  return (
    <TodoRightLowerListWrapper>
      오른쪽 아래
    </TodoRightLowerListWrapper>
  );
}

export default TodoRightLowerList;