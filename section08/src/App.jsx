import './App.css'

import {useState, useRef} from 'react';

import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';

const morkData = [
    {
      id: 0,
      isDone : false,
      content: 'Study React',
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone : false,
      content: 'Clean the room',
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone : false,
      content: 'Make Dinner',
      date: new Date().getTime(),
    }
  ];

function App() {
  
  const [todos,setTodos] = useState(morkData);
  const idRef = useRef(3);

  const onCreate = (content) =>{
    const newTodo = {
      id: idRef.current++,
      isDone : false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId)=>{
    
    // todos 값들 중에 targetId와 일치하는 Id를 갖는 todo item의 isDone을 변경

    // todos 배열에서 해당 Id를 가진 요소의 isDone 데이터만 바꾼 새로운 배열이 필요
    // setTodos(todos.map((todo)=>{
    //   if(todo.id === targetId){
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone,
    //     }
    //   }
    //   return todo;
    // }));

    setTodos(todos.map((todo)=> todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo ));
  }

  const onDelete = (targetId) => {

    // todos 배열에서 targetId와 일치하는 Id를 갖는 요소만 삭제하고 새로운 배열로 만듬
    setTodos(todos.filter((todo)=> todo.id !== targetId ));
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <TodoList todos={todos} updateList={onUpdate} deleteList={onDelete} />
    </div>
  )
}

export default App
