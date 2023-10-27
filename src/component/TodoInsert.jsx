import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd, MdPostAdd } from "react-icons/md";
import InsertModal from './InsertModal';

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
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

function TodoInsert(props) {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  
  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledButton>
        <MdPostAdd onClick={showModal} />
        {modal && <InsertModal setModal={setModal} /> }
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;