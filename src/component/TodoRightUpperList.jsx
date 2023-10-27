import React from 'react';
import styled from 'styled-components';

const TodoRightUpperListWrapper = styled.div`
  min-height: 160px;
  max-height: 300px;
  overflow-y: auto;
`;

function TodoRightUpperList(props) {
  return (
    <TodoRightUpperListWrapper>
      오른쪽 위
    </TodoRightUpperListWrapper>
  );
}

export default TodoRightUpperList;