import React, { useState } from 'react';
import styled from 'styled-components';


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
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert('무엇을 할 지 내용을 입력하세요!');
      return; 
    }
    onInsert(value);
    setValue('');
  };
  
  return (
    <TodoInsertWrapper onSubmit={handleSubmit}>

    </TodoInsertWrapper>
  );
}

export default TodoInsert;