import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import {useState} from 'react';

function App() {

  
  // React.js의 데이터 흐름
  // = 단방향 데이터 흐름

  // Props는 부모 -> 자식 관계로만 전달 가능
  const [countNum, setCountNum] = useState(0);

  const onClickBtn = ( btnValue )=> {
    setCountNum( countNum + btnValue );
  }

  // State Lifting 
  // : 동일한 State로 여러 컴포넌트에서 작업이 이루어 져야 하는 경우, 
  //   해당하는 컴포넌트들이 함께 모이는 부모 요소에서 State를 선언하고 셋팅한 후 
  //   자식 컴포넌트에서 실제 작업이 이뤄 질 수 있도록 Props로 넘기는 일종의 "State 끌어올리기"를 뜻함


  return (
    <div className="App">
      <h1>Simple Counter APP</h1>
      <section>
        <Viewer num={countNum}/>
      </section>
      <section>
        <Controller calcApp={onClickBtn}/>
        {/* 함수로 만든 Props도 넘길 수 있음 */}
      </section>
    </div>
  )
}

export default App
