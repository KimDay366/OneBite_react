// [회원가입 Form 만들기]
// 정보 : 이름, 생년월일, 국적, 자기소개

import {useState} from 'react';
import './register.css';

const Register = () =>{

    const [name, setName] = useState("이름");
    const onChangeName = (e)=>{
        //console.log(e); // Synthetic... > target > value : "사용자가 입력 한 값 출력"
        setName(e.target.value);
    }

    const [birth, setBirth] = useState("");
    const onChangeBirth = (e) =>{
        setBirth(e.target.value);
    }

    const [country, setCountry] = useState("");
    const onChangeCountry = (e) =>{
        setCountry(e.target.value);
    }

    const [info, setInfo] = useState("");
    const onChangeInfo = (e) =>{
        setInfo(e.target.value);
    }

    return <>
    <div>Register</div>
    <form action="">
        <div>
            <label htmlFor="userName">이름</label>
            <input onChange={onChangeName} value={name} id="userName" placeholder ={"이름"}/>
            <span>작성 값 : {name}</span>
        </div>
        <div>
            <label htmlFor="userBirth">생년월일</label>
            <input onChange={onChangeBirth} value={birth} type="date" id="userBirth"/>
            {/* input type="date" 하면 datePicker가 자동으로 생성 됨 */}
            <span>작성 값 : {birth}</span>
        </div>
        <div>
            <label htmlFor="userCountry">국적</label>
            <select onChange={onChangeCountry} value={country} id="userCountry">
                <option value="">선택하세요</option>
                <option value="korea">한국</option>
                <option value="asia">아시아</option>
                <option value="africa">아프리카</option>
                <option value="america">아메리카</option>
                <option value="etc">기타</option>
            </select>
            <span>작성 값 : {country}</span>
        </div>
        <div>
            <label htmlFor="userInfo">자기소개</label>
            <textarea onChange={onChangeInfo} value={info} id="userInfo" placeholder ={"자기소개를 입력 해 주세요"}></textarea>
            <span>작성 값 : {info}</span>
        </div>
    </form>
    </>
}

export default Register;