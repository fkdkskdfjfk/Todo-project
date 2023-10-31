import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useRef, useState } from 'react';
import TodoFrame from './component/TodoFrame';
import TodoInsert from './component/TodoInsert';
import { v4 as uuidv4 } from "uuid";


const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 글로벌 스타일 */
  body {
    background: #FCF5ED;
  }
`;


function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: '수업 교안 작성하기',
    //   content: 'content1',
    //   checked: true
    // },
    // {
    //   id: 2,
    //   text: '시험 채점하기',
    //   content: 'content2',
    //   checked: true
    // },
    // {
    //   id: 3,
    //   text: '단계별 실습 예제 만들기',
    //   content: 'content3',
    //   checked: false
    // }
  ]);
  const [rightTodos, setRightTodos] = useState('');

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storageTodos);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const nextId = useRef(1);

  const handleInsert = (text, content, dayTime) => {
    const todo = {
      id: uuidv4(),
      text,
      content,
      checked: false,
      dayTime
    }

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo));
  };

  const handleView = (id) => {
    setRightTodos(todos.filter(todo => todo.id === id));
  };

  const handleAmend = (id, text, content, dayTime) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text, content, dayTime } : todo));
  };
  
  return (
    <>
      <GlobalStyle />
      <TodoFrame todos={todos} onRemove={handleRemove} onToggle={handleToggle} 
        onView={handleView} onAmend={handleAmend}
        rightTodos={rightTodos}
      >
        <TodoInsert onInsert={handleInsert}/>

      </TodoFrame>

    </>
  );
}

export default App;
