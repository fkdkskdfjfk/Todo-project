import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const InsertModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 10px;
  background: #22b8cf;
  z-index: 99;
  position: absolute;
  top: 25%;
  left: 25%;
  text-align: center;
  cursor: default;

  .registButton {
    position: absolute;
    outline: none;
    right: 20%;
    bottom: 5%;
  }

  .closeButton {
    position: absolute;
    outline: none;
    right: 5%;
    bottom: 5%;
  }
`;

const StyledInput = styled.input`
  background: white;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledTextarea = styled.textarea`
  background: white;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
`;

// 함수
function InsertModal(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // closeModal();
  };

  const closeModal = () => {
    props.setModal(false);
  };

  return (
    <InsertModalWrapper>
      <StyledInput 
        text='text'
        placeholder='제목'
        value={value}
        onChange={handleChange}
      />
      <button className='registButton' onClick={undefined}>
        등록
      </button>
      <button className='closeButton' onClick={closeModal}>
        닫기
      </button>
      
      
    </InsertModalWrapper>
  );
}

export default InsertModal;