import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TodoRightUpperListWrapper = styled.form`
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
  const { rightTodos, onAmend } = props;
  const [amendText, setAmendText] = useState('');
  const [amendContent, setAmendContent] = useState('');

  useEffect(() => {
    setAmendText(amendText => rightTodos && rightTodos[0].text);
    setAmendContent(rightTodos && rightTodos[0].content);
  }, [ rightTodos ]);

  const handleChangeText = (e) => {
    setAmendText(e.target.value)
  };
  
  const handleChangeContent = (e) => {
    setAmendContent(e.target.value)
  };
  
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
        {rightTodos && (<button className='amendButton' type="submit" onClick={(e) => {
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