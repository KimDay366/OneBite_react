import './App.css'
import {useReducer, useRef, createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import New from './pages/New';
import Notfound from './pages/Notfound';

// 임시 제작용 데이터
// const mockData = [
//   {
//     id : 1,
//     createDate : new Date('2025-08-06').getTime(),
//     emotionID : 1,
//     content : 'Day1! making diary'
//   },
//   {
//     id : 2,
//     createDate : new Date('2025-08-05').getTime(),
//     emotionID : 2,
//     content : 'Day2! making diary'
//   },
//   {
//     id : 3,
//     createDate : new Date('2025-07-05').getTime(),
//     emotionID : 3,
//     content : 'Day3! making diary'
//   },
// ]

// 기존 reducer 함수 => local storage 용으로 변환 
// function reducer(state, action){
//   switch(action.type){
//     case "CREATE" : 
//       return [action.data, ...state];

//     case "UPDATE" :
//       return state.map((item)=> String(item.id) === String(action.data.id) ? action.data : item );
      
//     case "DELETE" :
//       return state.filter((item) => String(item.id) !== String(action.id) );

//     default : return state;
//   };
// };

function reducer(state, action){
  let nextState;

  switch(action.type){

    case 'INIT' :
      return action.data;
      // 'init' 데이터는 local storage에서 불러온 값이므로 nextState에 보관해서 저장 할 필요가 없음

    case "CREATE" : {
      nextState = [action.data, ...state];
      break;
    }

    case "UPDATE" :{
      nextState = state.map((item)=> String(item.id) === String(action.data.id) ? action.data : item );
      break;
    }
      
    case "DELETE" :{
      nextState = state.filter((item) => String(item.id) !== String(action.id) );
      break;
    }

    default : return state;
  };

  localStorage.setItem('diary', JSON.stringify(nextState));

  return nextState;
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();


function App(){

  const [isLoading, setIsLoading] = useState(true);

  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // 개발자 창 Application > Storage > Local storage > 본인의 url 에 저장 된 데이터 확인 가능

  // local stroage 에 데이터 저장하기
  // localStorage.setItem('test','hello');
  // localStorage.setItem('test2', JSON.stringify({name:"kim", age: 35})); 객체 저장하기

  // local stroage에 있는 데이터 확인하기
  // console.log(localStorage.getItem('test'));
  // console.log(JSON.parse(localStorage.getItem('test2')));

  // local stroage에 저장 된 데이터 삭제하기
  // localStorage.removeItem('test');
  // 또는 개발자 창에 가서 직접 삭제 가능

  // local stroage에서 데이터 불러와 일기 정보 보여주기
  useEffect(()=>{
    const storedData = localStorage.getItem('diary');
    if(!storedData){
      setIsLoading(false);
      return; 
      // JSON.parse()의 값이 undefined / null 이면 치명적인 오류 발생 
    }
    const parsedData = JSON.parse(storedData);
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
      // 혹시나 JSON.parse()의 값이 배열이 아닌 경우, 더이상 작업하지 않고 빠져 나오도록 수정 
    }

    let maxId = 0;

    parsedData.forEach((item)=>{
      if(Number(item.id) > maxId){
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId +1;

    dispatch({
      type: 'INIT',
      data : parsedData,
    });

    setIsLoading(false);
    
  },[]);

  // 1. 새로운 일기 추가
  const onCreate = (createDate, emotionID, content)=>{
    dispatch({
      type: 'CREATE',
      data: {
        id : idRef.current++,
        createDate, 
        emotionID, 
        content,
      },
    });
  };

  // 2. 기존 일기 수정
  const onUpdate = (id, createDate, emotionID, content)=>{
    dispatch({
      type: 'UPDATE',
      data: {
        id, 
        createDate, 
        emotionID, 
        content 
      },
    });
  };

  // 3. 기존 일기 삭제
  const onDelete = (id)=>{
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  if(isLoading){

    return <div>로딩중 입니다!</div>

  }

  return <>
    {/* <button onClick={()=>{onCreate(new Date().getTime(), 1 ,'lalala!!')}}>diary add</button>

    <button onClick={()=>{onUpdate(5, new Date().getTime(), 1 ,'Update!')}}>diary update</button>
    
    <button onClick={()=>{onDelete(5)}}>diary Del</button> */}

    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate,onUpdate,onDelete}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  </>
}

export default App
