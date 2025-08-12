import './App.css';
import { useState } from "react";
// react가 제공하는 내장함수 사용

// State & Props 작동하기
// const Bulb = ({light})=>{
//     // light = App() 내부에서 이미 useState()로 선언된 값
//     console.log(light); // App() 내부가 리-렌더링 될 때마다 출력 됨
    
//     return(
//         <div>{ light === 'ON' ? 
//         <h1 style = {{color : "white", background : "orange"}}>ON</h1> 
//         : <h1 style = {{color : "gray", background : "#111"}}>OFF</h1> }</div>
//     )
// }

// function App() {
  
//     const [state, setState] = useState(0); 
//     const [ light, setLight ] = useState("OFF"); 

//   return <>
//     <div>
//         <h2>state : {state}</h2>
//         <button onClick={()=>{
//             setState( state + 1 );
//         }}>+1</button>
//     </div>
//     <div style = {{border : '2px dotted #555', margin : '10px 0', padding : '5px'}}>
//         <h2>{light}</h2>
//         <Bulb light={light}/>

//         <button onClick={()=>{
//             setLight( light==="OFF"? "ON" : "OFF");
//         }}>{light === "OFF"? "ON💡" : "OFF"} </button>
//     </div>
//   </>
  
// }

// export default App


// =======================================================

// 반복되는 리-렌더링 해결하기

// 각 컴포넌트마다 얽혀있으면 리-렌더링이 무한정 일어나므로, 서버 과부화를 막기위해 각각 컴포넌트 마다 역할을 분리함
// 강의를 보기 위해 App() 컴포넌트 안에 전부 저장 함, 제대로 된 분리를 위해서는 모듈화(.jsx)로 작업 해야 함

const Bulb = ()=>{
    
    const [ light, setLight ] = useState("OFF"); 
    console.log(light);
    
    return(
        <div style = {{border : '2px dotted #555', margin : '10px 0', padding : '5px'}}>
            <div>{ light === 'ON' ? 
                <h1 style = {{color : "white", background : "orange"}}>ON</h1> 
                : <h1 style = {{color : "gray", background : "#111"}}>OFF</h1> }
            </div>
            <button onClick={()=>{ setLight( light==="OFF"? "ON" : "OFF");}}>
                {light === "OFF"? "ON💡" : "OFF"} 
            </button>
        </div>  
    );
}

const Counter = ()=>{

    const [state, setState] = useState(0); 
    console.log(state)

    return (
        <div>
            <h2>state : {state}</h2>
            <button onClick={()=>{ setState( state + 1 ); }}>+1</button>
        </div>
    );
}

function App() {   

  return <>
    <Bulb />
    <Counter />
  </>
  
}

export default App

