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
  /* top: 50%;
  right: 0%; */
  
  text-align: center;
  cursor: default;
  flex-direction: column;

  .registButton, .closeButton {
    width: 5rem;
    height: 2rem;
    position: absolute;
    outline: none;
    border: none;
  
    cursor: pointer;
  }
  .registButton {
    right: 25%;
    bottom: 5%;
  }
  .closeButton {
    right: 5%;
    bottom: 5%;
  }
`;

const StyledInput = styled.input`
  width: 70%;
  margin-top: 40px;
  background: white;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  

  &::placeholder {
    color: #deeee6;
  }
`;

const StyledTextarea = styled.textarea`
  width: 70%;
  height: 40%;
  margin-top: 30px;
  background: white;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  resize: none;
  flex: 1;

  &::placeholder {
    color: #deeee6;
  }
`;

// 함수
function InsertModal(props) {
  const [text, setText] = useState('');
  const [content, setContent] = useState('');


  const handleChangeText = (e) => {
    setText(e.target.value)
  };
  
  const handleChangeContent = (e) => {
    setContent(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!text || !content) { 
      alert('무엇을 할 지 내용을 입력하세요!');
      return; 
    }

    props.onInsert(text, content);
    closeModal();
    setText(text);
    // setContent(content);
  };

  const closeModal = () => {
    props.setModal(false);
  };

  const today = new Date();

  const dday = (year, month, day) => {
    const endDate = new Date(year, month-1, day);
    const diffDate = endDate.getTime() - today.getTime();
    return Math.ceil(diffDate / (1000*60*60*24));
  };

  return (
    <InsertModalWrapper>
      <div>할 일 추가</div>
      <StyledInput 
        type='text'
        placeholder='제목'
        value={text}
        onChange={handleChangeText}
      />
      <StyledTextarea
        placeholder='내용을 입력하세요'
        value={content}
        onChange={handleChangeContent}
      />
      <div>
        
      </div>
      <button className='registButton' type="submit" onClick={handleSubmit}>
        등록
      </button>
      <button className='closeButton' onClick={closeModal}>
        닫기
      </button>
      
      
    </InsertModalWrapper>
  );
}

export default InsertModal;