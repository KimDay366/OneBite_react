// [회원가입 Form 만들기]
// 정보 : 이름, 생년월일, 국적, 자기소개

// 같은 저장공간에서 불러오는 매서드의 경우 합쳐서 표기 가능
// import {useState} from 'react';
// import {useRef} from 'react';

import {useState, useRef} from 'react';
import './register.css';

const Register = () =>{

    const [input, setInput] = useState({
        name : '',
        birth : '',
        country : '',
        info : '',
    });

    const refObj = useRef(0);
    console.log(refObj);
    console.log(refObj.current);
    // {current : undefined} 가 기본으로 출력 되고, 
    // 지금처럼 값(0)이 들어가 있는 경우 {current : 0}이 출력
    // refObj가 객체이기 때문에, 기본 객체 사용법 처럼 "refObj.current" 하면 값만 출력 됨

    console.log('register rendering!');
    // 기존 useState같은 경우 리렌더링이 진행 되기 때문에 값이 변한 만큼 해당 내용이 출력되지만
    // useRef는 리렌더링 되지 않으므로, 값이 변해도 최초 1번만 나오고 더이상 출력되지 않음 

    // useRef 사용법 1) 사용자가 값을 얼마나 수정 했는지 알아보는 기능 추가
    const countRef = useRef(0);

    const onChange = (e) =>{

        countRef.current++;

        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    }

    // useRef 사용법 2) 사용자들의 값을 저장하고 확인하여 데이터를 전송하는 기능
    const inputRef = useRef();

    const onSubmit =()=>{
        if(input.name === ""){
            // 이름을 입력하는 DOM 요소에 포커싱
            inputRef.current.focus();
        }
    }

    return <>
    <div>Register</div>
    <form action="">
        <div>
            <label htmlFor="userName">이름</label>
            <input ref={inputRef} name="name" onChange={onChange} value={input.name} id="userName" placeholder ={"이름"}/>
            <span>작성 값 : {input.name}</span>
        </div>
        <div>
            <label htmlFor="userBirth">생년월일</label>
            <input name="birth" onChange={onChange} value={input.birth} type="date" id="userBirth"/>
            <span>작성 값 : {input.birth}</span>
        </div>
        <div>
            <label htmlFor="userCountry">국적</label>
            <select name="country" onChange={onChange} value={input.country} id="userCountry">
                <option value="">선택하세요</option>
                <option value="korea">한국</option>
                <option value="asia">아시아</option>
                <option value="africa">아프리카</option>
                <option value="america">아메리카</option>
                <option value="etc">기타</option>
            </select>
            <span>작성 값 : {input.country}</span>
        </div>
        <div>
            <label htmlFor="userInfo">자기소개</label>
            <textarea name="info" onChange={onChange} value={input.info} id="userInfo" placeholder ={"자기소개를 입력 해 주세요"}></textarea>
            <span>작성 값 : {input.info}</span>
        </div>

        <button onClick={onSubmit}>제출</button>
    </form>

    <div>Use Reference</div>
    <button onClick={()=>{
        refObj.current++;
    }}> REF + 1 </button>
    </>
}

export default Register;