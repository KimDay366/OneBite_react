import './App.css'

import {useState, useRef, useReducer, useCallback} from 'react';

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
      return [action.data, ...state ] 

    case "UPDATE" : 
      return state.map((item)=> item.id === action.targetId ? { ...item, isDone: !item.isDone } : item);

    case 'DELETE' :
      return state.filter((item)=> item.id !== action.targetId );

    default : return state;
  }

}


function App() {
  
  const [todos,dispatch] = useReducer(reducer, morkData);

  const idRef = useRef(3);

  // [ 기존 방식 ] 기능 함수가 리렌더링 될 때마다 새로운 주소를 할당받아 값이 변한 것 처럼 보임
  // const onCreate = (content) =>{
  //   dispatch({
  //     type : 'CREATE',
  //     data : {
  //       id: idRef.current++,
  //       isDone : false,
  //       content: content,
  //       date: new Date().getTime(),
  //     }
  //   })
  // }

  // const onUpdate = (targetId)=>{
  //   dispatch({
  //     type: 'UPDATE',
  //     targetId : targetId,
  //   })
  // }

  // const onDelete = (targetId) => {
  //   dispatch({
  //     type : 'DELETE',
  //     targetId : targetId,
  //   })
  // }

  const onCreate = useCallback((content) =>{
    dispatch({
      type : 'CREATE',
      data : {
        id: idRef.current++,
        isDone : false,
        content: content,
        date: new Date().getTime(),
      }
    });
  }, []);

  const onUpdate = useCallback((targetId)=>{
    dispatch({
      type: 'UPDATE',
      targetId : targetId,
    });
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type : 'DELETE',
      targetId : targetId,
    });
  },[]);
  // 의존성 객체, deps : 두번쨰 인자인 배열이 바뀌면 콜백 함수가 실행 됨
  // 현재처럼 빈 배열로 둘 경우, Mount(첫 로딩) 될 때 1번만 실행되고 그 이후로는 실행되지 않음

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
