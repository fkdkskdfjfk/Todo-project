import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FcCalendar } from "react-icons/fc";

const InsertModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  padding: 10px;
  border-radius: 10px;
  background: #54a1ad;
  z-index: 99;
  position: absolute;
  text-align: center;
  /* margin: 0 auto; */
  cursor: default;

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

const StyledCalendar = styled.div`
  width: 70%;
  margin-top: 10px;
  font-size: 1rem;
  line-height: 1.5;
  text-align: start;
  /* padding: 0.5rem; */
  padding-left: 5rem;
  /* display: flex; */
  position: relative;
  z-index: 999;

  .calendar {
    font-size: 25px;

    &:hover {
      cursor: pointer;
    }
  }
`;

// 함수
function InsertModal(props) {
  const [text, setText] = useState('');
  const [content, setContent] = useState('');
  const [dday, onChange] = useState(new Date());
  const [onCalendar, setOnCalendar] = useState(false);

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

    props.onInsert(text, content, dday.getTime());
    closeModal();
    setText(text);
    // setContent(content);
    
  };

  const closeModal = () => {
    props.setModal(false);
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
      <StyledCalendar>
        D-day: <FcCalendar className='calendar' onClick={() => {setOnCalendar(true)}}/>
        {onCalendar && <Calendar onChange={onChange} value={dday} onClickDay={() => {setOnCalendar(false)}} />}
        <h3>
          {new Date(dday).toLocaleDateString("ko", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h3>
        {console.log(dday.getTime())}
      </StyledCalendar>
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