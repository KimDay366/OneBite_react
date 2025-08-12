// [회원가입 Form 만들기]
// 정보 : 이름, 생년월일, 국적, 자기소개

import {useState} from 'react';
import './register.css';

const Register = () =>{

    // Step01. 4개의 state를 1개로 합침 

    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [info, setInfo] = useState("");

    const [input, setInput] = useState({
        name : '',
        birth : '',
        country : '',
        info : '',
    });

    const onChangeName = (e)=>{

        // Step 02. 내부 함수 구조를 변경

        // setName(e.target.value);
        // 기존에 사용했던 state function은 이제 사용하지 않고
        // 새로 생성한 state function으로 입력된 값을 받아 저장

        setInput({
            ...input,
            name : e.target.value,
        });
        // ...input = 기존에 저장된 값을 유지하고
        // name : e.target.value 로 name값만 업데이트!
    }

    // Step 03. 콜백 함수를 1개로 합침

    // const onChangeBirth = (e) =>{
    //     setInput({
    //         ...input,
    //         birth : e.target.value,
    //     });
    // }

    // const onChangeCountry = (e) =>{
    //     setInput({
    //         ...input,
    //         country : e.target.value,
    //     });
    // }

    // const onChangeInfo = (e) =>{
    //     setInput({
    //         ...input,
    //         info : e.target.value,
    //     });
    // }

    const onChange = (e) =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    }
    return <>
    <div>Register</div>
    <form action="">
        <div>
            <label htmlFor="userName">이름</label>
            <input name="name" onChange={onChange} value={input.name} id="userName" placeholder ={"이름"}/>
            <span>작성 값 : {input.name}</span>
        </div>
        <div>
            <label htmlFor="userBirth">생년월일</label>
            <input name="birth" onChange={onChange} value={input.birth} type="date" id="userBirth"/>
            {/* input type="date" 하면 datePicker가 자동으로 생성 됨 */}
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
    </form>
    </>
}

export default Register;