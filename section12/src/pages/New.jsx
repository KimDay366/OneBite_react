import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {DiaryDispatchContext} from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import useTitle from '../hooks/useTitle';

const New = ()=>{

    const {onCreate} = useContext(DiaryDispatchContext);

    const nav = useNavigate();
    // nav(-1) : 페이지 뒤로 가는 버튼이 됨

    // 페이지 탭에 보이는 title 바꾸기
    useTitle("뀨리의 하루 기록");

    const onSubmit = (input)=>{
        onCreate(input.createDate.getTime(), input.emotionID, input.content);
        nav('/',{replace : true});
        // 일기 작성 후 "홈페이지"로 이동하기 + 이전 페이지로 못 돌아가게
    }

    return <div> 
        <Header title={"새 일기 쓰기"}  leftChild={<Button text={'< 뒤로 가기'} onClick={()=>nav(-1)}/>} />
        <Editor onSubmit={onSubmit}/>
    </div>
}

export default New;
