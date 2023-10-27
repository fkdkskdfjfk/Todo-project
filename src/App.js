import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState } from 'react';
import TodoFrame from './component/TodoFrame';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 글로벌 스타일 */

`;

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <>
      <GlobalStyle />
      <TodoFrame>
      
      </TodoFrame>

    </>
  );
}

export default App;
