import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcCalendar } from "react-icons/fc";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TodoRightUpperListWrapper = styled.div`
  min-height: 300px;
  /* max-height: 300px; */
  overflow-y: auto;
  border-bottom: 1px solid gray;

  .upperDiv {
    border-bottom: 1px solid #dee2e6;
    background: #929291;
    
    padding: 14px;
    display: flex;
    align-items: center;
  }

  .lowerDiv {
    padding: 1rem;
    position: relative;

    .amendButton {
      width: 3rem;
      border-radius: 5px;
      position: absolute;
      outline: none;
      background: transparent;
      right: 10%;
      bottom: -40%;
    }
  }
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 1.125rem;
  line-height: 1.5;
  flex: 1;
  cursor: text;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 80px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  resize: none;
  flex: 1;
`;

const StyledTime = styled.div`
  background: none;
  outline: none;
  border: none;
  font-size: 1.125rem;
  line-height: 1.5;
  flex: 1;

  .calendar {
    font-size: 25px;

    &:hover {
      cursor: pointer;
    }
  }
`;

function TodoRightUpperList(props) {
  const { rightTodos, onAmend } = props;
  const [amendText, setAmendText] = useState('');
  const [amendContent, setAmendContent] = useState('');
  const [onCalendar, setOnCalendar] = useState(false);

  useEffect(() => {
    setAmendText(amendText => rightTodos && rightTodos[0].text);
    setAmendText(amendText => amendText);
    setAmendContent(rightTodos && rightTodos[0].content);
  }, [ rightTodos ]);

  const handleChangeText = (e) => {
    setAmendText(e.target.value)
  };
  
  const handleChangeContent = (e) => {
    setAmendContent(e.target.value)
  };
  
  // const Dday = (year, month, day) => {
  //   const endDate = new Date(year, month-1, day);
  //   const diffDate = endDate.getTime() - Today.getTime();
  //   return Math.ceil(diffDate / (1000*60*60*24));
  // };

  // const Today = new Date();
  // const dday = rightTodos[0].dayTime - Today.getTime();

  return (
    <TodoRightUpperListWrapper>
      <div className='upperDiv'>
        <StyledInput 
          type='text'
          value={amendText}
          onChange={handleChangeText} 
        />
      </div>
      <div className='lowerDiv'>
        <StyledTextarea
          value={amendContent} 
          onChange={handleChangeContent}
        />
        <StyledTime>
          {(amendText || amendContent) && rightTodos[0].dayTime}
          <FcCalendar className='calendar' onClick={() => {setOnCalendar(true)}}/>
        </StyledTime>
        {amendText && (<button className='amendButton' type="button" onClick={(e) => {
          e.preventDefault();
          onAmend(rightTodos[0].id, amendText, amendContent)
          setAmendText('');
          setAmendContent('');
        }}>
        수정
        </button>)}
      </div>
    </TodoRightUpperListWrapper>
  );
}

export default TodoRightUpperList;