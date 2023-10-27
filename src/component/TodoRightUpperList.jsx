import React, { useState } from 'react';
import styled from 'styled-components';

const TodoRightUpperListWrapper = styled.div`
  min-height: 300px;
  /* max-height: 300px; */
  overflow-y: auto;
  background: green;
  

  .upperDiv {
    border-bottom: 1px solid #dee2e6;
    background: yellow;
    
    padding: 14px;
    display: flex;
    align-items: center;
  }

  .lowerDiv {
    padding: 1rem;
    /* background: green; */
    position: relative;

    .amendButton {
      width: 3rem;
      position: absolute;
      right: 10%;
      bottom: -40%;
    }
  }
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  /* padding: 0.5rem; */
  font-size: 1.125rem;
  line-height: 1.5;
  flex: 1;
  cursor: text;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  resize: none;
  flex: 1;
`;

function TodoRightUpperList(props) {
  const { rightTodos, todos, onInsert, onAmend } = props;
  const [amendText, setAmendText] = useState('');
  const [amendContent, setAmendContent] = useState('');


  const handleChangeText = (e) => {
    setAmendText(e.target.value)
  };
  
  const handleChangeContent = (e) => {
    setAmendContent(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onInsert(amendText, amendContent);
    // setAmendText('');
    setAmendText(amendText);
    
    // setAmendContent(amendContent);
  };
  
  return (
    <TodoRightUpperListWrapper>
      <div className='upperDiv'>
        {/* {rightTodos && rightTodos[0].text} */}
        <StyledInput 
          // value={amendText}
          defaultValue={rightTodos && rightTodos[0].text} 
          onChange={handleChangeText} 
        />
      </div>
      <div className='lowerDiv'>
        {/* {rightTodos && rightTodos[0].content} */}
        <StyledTextarea
          // value={amendContent}
          defaultValue={rightTodos && rightTodos[0].content} 
          onChange={handleChangeContent}
        />
        <button className='amendButton' type="submit" onClick={() => {
          onAmend(rightTodos[0].id, amendText, amendContent)}}>
        수정
        </button>
      </div>
    </TodoRightUpperListWrapper>
  );
}

export default TodoRightUpperList;