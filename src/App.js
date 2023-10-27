import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from 'react';
import TodoFrame from './component/TodoFrame';
import TodoInsert from './component/TodoInsert';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 글로벌 스타일 */

`;


function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem('todos')) || [];
  //   setTodos(storageTodos);
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);
  
  return (
    <>
      <GlobalStyle />
      <TodoFrame>
        <TodoInsert />
      </TodoFrame>

    </>
  );
}

export default App;
