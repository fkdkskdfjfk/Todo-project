import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";

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

const Amend = styled.div`
  display: flex;
  align-items: center;
  padding-right: 7px;
  font-size: 1.3rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;

  &:hover {
    color: #ff8787;
  }
`;


function TodoListItem(props) {
  const { todo: {id, text, content, checked, dayTime}, onRemove, onToggle, onView } = props;
  // console.log(onToggle);
  return (
    <TodoListItemWrapper>
      <CheckBox checked={checked} onClick={() => {onToggle(id)}}>
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
      </CheckBox>
      <DdayBox>{dayTime}</DdayBox>
      <Text checked={checked}>{text}</Text>
      <Amend onClick={() => { onView(id); }}>
        <HiPencil />
      </Amend>
      <Remove onClick={() => { onRemove(id); }}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;