import React from 'react';
import styled, { css } from 'styled-components';

const TodoRightListItemWrapper = styled.div`
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
    color: ${props => props.checked && '#5d6c6e'};
  }
`;

const DdayBox = styled.div`
  width: 60px;
  font-weight: bold;
  color: red;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;  // 차지할 수 있는 영역 모두 차지

  /* 체크되었을 때 보여줄 스타일 */
  ${props => props.checked &&
    css`
      color: #5d6c6e;
      text-decoration: line-through;
    `
  }
`;

function TodoRightListItem(props) {
  const { todo: {id, text, checked, dayTime} } = props;

  return (
    <TodoRightListItemWrapper>

    </TodoRightListItemWrapper>
  );
}

export default TodoRightListItem;