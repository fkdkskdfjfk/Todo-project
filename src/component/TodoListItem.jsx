import React from 'react';
import styled, { css } from 'styled-components';

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;

    /* 체크박스 체크되었을 때 보여줄 스타일 */
    color: ${props => props.checked && '#22b8cf'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;  // 차지할 수 있는 영역 모두 차지

  /* 체크되었을 때 보여줄 스타일 */
  ${props => props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `
  }
`;

// const Remove


function TodoListItem(props) {
  return (
    <TodoListItemWrapper>
      
    </TodoListItemWrapper>
  );
}

export default TodoListItem;