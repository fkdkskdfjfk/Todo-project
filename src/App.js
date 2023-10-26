import logo from './logo.svg';
import './App.css';
import reset from "styled-reset";
import { useState } from 'react';


const GlobalStyle = createGlobalStyle`
  ${reset}

  /* 글로벌 스타일 */

`;

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <>
    
    </>
  );
}

export default App;
