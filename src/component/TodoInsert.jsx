import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd, MdPostAdd } from "react-icons/md";
import InsertModal from './InsertModal';

const TodoInsertWrapper = styled.form`
  height: 56px;
  display: flex;
  background: #495057;
  /* position: relative; */
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1;

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  transition: 0.2s background;

  &:hover {
    background: #adb5bd;
  }
`;

function TodoInsert({ onInsert }) {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  
  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledButton onClick={showModal}>
        <MdPostAdd  />
      </StyledButton>
      {modal && <InsertModal onInsert={onInsert} setModal={setModal} /> }
    </TodoInsertWrapper>
  );
}

export default TodoInsert;