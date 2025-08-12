import './App.css'

import {useState, useRef, useReducer, useCallback, createContext, useMemo} from 'react';

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

// export const TodoContext = createContext();
// 선언 후 본문에서 데이터를 넘겨야 하는 컴포넌트를 해당 변수로 묶고
//  value={{...}} 값의 객체로 전달

// 항상 변화는 값 vs 변화하지 않는 값으로 context 분리
export const TodoStateContext = createContext();
export const TodoDispatchContent = createContext();


function App() {
  
  const [todos,dispatch] = useReducer(reducer, morkData);

  const idRef = useRef(3);

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

  const memoizedDispatch = useMemo(()=>{ return {onCreate, onUpdate, onDelete}},[]);
  // 리렌더링을 막기 위해 return으로 세개의 객체함수를 전달하고, 
  // Mount 이후에 추가로 작업하지 않기 위해 빈 배열 전달

  return (
    <div className="App">
      {/* <Exam /> */}

      <Header />
      {/* 기존 - 자식 요소에게 Props를 직접 전달 
      <Editor onCreate={onCreate}/>
      <TodoList todos={todos} updateList={onUpdate} deleteList={onDelete} /> */}

      {/* context 1단계 : 1개의 context로 모든 value 전달 => 불필요한 리렌더링 발생
      <TodoContext.Provider value={{todos, onCreate, onUpdate, onDelete}} >
        <Editor />
        <TodoList />
      </ TodoContext.Provider> */}

      <TodoStateContext.Provider value={todos} >

        {/* <TodoDispatchContent.Provider value={{onCreate, onUpdate, onDelete}}>
          이렇게 자식요소로 작업해야 하는데, 결국 todos가 업데이트 될 때마다 함께 업데이트 됨
          따라서 useMemo로 리렌더링을 막음 */}
        <TodoDispatchContent.Provider value={memoizedDispatch}>
          <Editor />
          <TodoList />
        </TodoDispatchContent.Provider>
      </ TodoStateContext.Provider>
    </div>
  )
}

export default App
