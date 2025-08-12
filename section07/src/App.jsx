import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import {useState, useEffect, useRef} from 'react';

function App() {

  const [countNum, setCountNum] = useState(0);
  const [input, setInput] = useState(0);

  
  // [ useEffect 활용 예제 ]
  // useEffect(()=>{
    //   console.log(`count number : ${countNum} / input : ${input}`);
    // },[countNum, input]);
    // [] : 의존성 배열, dependency array, deps
    
  const isMount = useRef(false);


  // [ useEffect 실사용 방법 ]
  // 1. 마운트 : 탄생 
  // useEffect 사용 시 빈deps (빈 배열)을 전달하면 최초 로드시에 1번만 실행되고, 더이상 이뤄지지 않음
  useEffect(()=>{ console.log('start!'); },[]);


  // 2. 업데이트 : 변화 , 리렌더링
  // useEffect 사용 시 deps를 아예 지워버리면, 리렌더 될 때마다 해당하는 콜백함수가 이루어짐.
  useEffect(()=>{ console.log('update!!'); });

  // 단 이 함수는 최초 로드시에도 같이 실행 되므로, useRef(리렌더링이 이뤄지지 않는 객체)를 사용하여 
  // 마운트 될 때는 실행되지 않고, 리렌더링이 될 때만 실행될 수 있도록 보완

  useEffect(()=>{ 
    if(!isMount.current){
      // isMount.current가 false 인 경우에만 실행
      // 즉, 최초 마운트 시점에만 실행되는 if문

      isMount.current = true;
      return; 
    }
      // 마운트 되는 시점에는 if문만 실행되고 전체 구문이 종료되므로 아래 콘솔이 나오지 않고, 
      // 이 후 리렌더링 되는 시점에만 표기됨
      console.log('update!!'); 

      // useRef 변수 선언문이 마운트 아래에 위치하면 else문을 사용해 호출하고, 
      // useRef 변수 선언문이 마운트 위에 있으면 아래와 같이 그냥 표기해도 사용 가능
  })


  // 3. 언마운트 : 죽음
  // 클린업, 정리함수 : useEffect가 끝날때 실행 되는 함수
  // 정리 함수를 useEffect 콜백함수 내의 return문의 함수로 사용함
  // Even.jsx 참고
  useEffect(()=>{
        // 클린업, 정리함수 : useEffect가 끝날때 실행 되는 함수
        return () =>{
            console.log('Unmount! Finish!');
        }
    },[]);


  const onClickBtn = ( btnValue )=> {
    setCountNum( countNum + btnValue );
  }

  return (
    <div className="App">
      <h1>Simple Counter APP</h1>
      <section>
        <input value={input} onChange={(e)=>{ setInput(e.target.value)}} />
      </section>
      <section>
        <Viewer num={countNum}/>
        {countNum % 2 === 0? <Even /> : null}
      </section>
      <section>
        <Controller calcApp={onClickBtn}/>
        {/* 함수로 만든 Props도 넘길 수 있음 */}
      </section>
    </div>
  )
}

export default App
