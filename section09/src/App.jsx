import './App.css'

import {useState, useRef, useReducer} from 'react';

import Header from './components/Header';
import Editor from './components/Editor';
import TodoList from './components/TodoList';

import Exam from './components/Exam'

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

function reducer(state, action){

  switch(action.type){
    case "CREATE" : 
      return [action.data, ...state ] // 신규 항목 먼저 앞으로(=맨 위로) 넣고, 나머지 기존 항목은 뿌리기 

    case "UPDATE" : 
      return state.map((item)=> item.id === action.targetId ? { ...item, isDone: !item.isDone } : item);

    case 'DELETE' :
      return state.filter((item)=> item.id !== action.targetId );

    default : return state;
  }

}

// App() 컴포넌트는 UI를 렌더링 하는 역할이 주 역할임
// 하지만 현재의 todo list에서의 App() 컴포넌트는 state의 선언과 관리까지 모두 진행하고 있음
// 이러한 경우, 가독성이 떨어지고 유지보수도 힘듬

function App() {
  
  // const [todos,setTodos] = useState(morkData);
  const [todos,dispatch] = useReducer(reducer, morkData);

  const idRef = useRef(3);

  const onCreate = (content) =>{

    // [기존, setState 방식]
    // const newTodo = {
    //   id: idRef.current++,
    //   isDone : false,
    //   content: content,
    //   date: new Date().getTime(),
    // };

    // setTodos([newTodo, ...todos]);

    // [변경, reducer 방식]
    dispatch({
      type : 'CREATE',
      data : {
        id: idRef.current++,
        isDone : false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId)=>{
    // [기존, setState 방식]
    // setTodos(todos.map((todo)=> todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo ));

    // [변경, reducer 방식]
    dispatch({
      type: 'UPDATE',
      targetId : targetId,
    })
  }

  const onDelete = (targetId) => {
    // [기존, setState 방식]
    // setTodos(todos.filter((todo)=> todo.id !== targetId ));

    // [변경, reducer 방식]
    dispatch({
      type : 'DELETE',
      targetId : targetId,
    })
  }

  return (
    <div className="App">
      {/* <Exam /> */}

      <Header />
      <Editor onCreate={onCreate}/>
      <TodoList todos={todos} updateList={onUpdate} deleteList={onDelete} />
    </div>
  )
}

export default App
