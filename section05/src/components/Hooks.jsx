// Hook 사용하기 
import {useState, useRef} from 'react';
import useGetInput from '../hooks/useGetInput';
// Hooks 폴더에 새롭게 작성한 커스텀 훅을 불러와 사용

// 1. 함수 컴포넌트 또는 커스텀 훅 내부에서만 호출 가능
// const hookTest1 = useState(); 오류 발생

const Hooks = ()=>{
    const hookFn = useState(); // 오류 미 발생

    // 2. 조건문, 반복문에서는 호출 될 수 없다
    // Hook끼리 불러오는 순서가 꼬이게 되어 호출이 불가능함
    // 다른 플러그인의 도움을 받아 생성이 가능하더라도, 하면 안되는 작업

    // if(true){
    //     const hookTest2 = useState();
    //     console.log(hookTest2);
    // }

    // 3. 나만의 훅(Custom Hook) 만들기

    // [기존] 1줄의 input을 위하여 여러줄의 내용을 적어야 하며, 재사용 하려면 동일한 문장을 반복적으로 작성해야 함
    // const [input,setInput] = useState("");

    // const onChangeInput = (e) => {
    //     setInput(e.target.value);
    // }

    // 불러 온 커스텀 훅을 여러 번 호출하여 재사용 가능
    const [input, onChangeInput] = useGetInput(); 
    const [input2, onChangeInput2] = useGetInput(); 

    return <div style = {{marginTop : '20px ', borderTop : '2px solid #55f'}}>
        <h3>Hooks Sample</h3>
        <input value={input} onChange={onChangeInput} />
        <input value={input2} onChange={onChangeInput2} />
    </div>
}

export default Hooks;