import { useContext, useEffect, useState } from 'react';
import {useParams , useNavigate } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';

import useDiary from '../hooks/useDiary'
import useTitle from '../hooks/useTitle';

const Edit = ()=>{
    
    
    const params = useParams(); // url paramiter 가져오는 변수
    const nav = useNavigate();
    
    useTitle(`뀨리의 ${params.id}번 일기 수정`);

    const {onUpdate, onDelete} = useContext(DiaryDispatchContext);
    
    const onClickDel = ()=>{
        console.log(params.id); // 클릭해서 접속 한 URL의 ID가 나옴
        
        if(window.confirm('정말 삭제 하시겠습니까? 삭제되면 복구 할 수 없습니다.')){
            // window 내장함수, [ 확인 / 취소 ] 버튼으로 사용자의 의중을 파악할 수 있음
            // 확인 = True / 취소 = False
            // 사용자가 [확인]을 누르면 삭제 로직이 실행
            
            onDelete(params.id);
            nav('/',{replace : true});
            // 홈페이지로 돌아가고 뒤로가기 안되게
            // "삭제" 버튼이 눌리고 난 다음에 해당 렌더링이 진행 => 특정 이벤트와 함께 발생하므로 문제 없음
        }
    }

    // 현재 기능은 Diary 페이지에서도 비슷한 기능을 하는게 있어서, 
    // custom Hook을 만들어 사용
    // const data = useContext(DiaryStateContext);
    // const [currentDiary, setCurrentDiary] = useState();
    // useEffect(()=>{
    //     const currentItem = data.find((item) => String(item.id) === String(params.id));
    //     if(!currentItem){
    //         window.alert('잘못된 경로 입니다');
    //         nav('/',{replace : true});
    //         // 화면 자체가 구성 된 다음에 바로 렌더링이 진행, 원활하게 이뤄지지 않음
    //     }
    //     setCurrentDiary(currentItem);
    //     // return currentItem;
    //     // useEffect 에서 return 값을 저장 하여 사용 할 수 없으므로
    //     // useState 를 사용해서 데이터를 사용 할 수 있도록 업그레이드 진행
    // }, [params.id]); // Url Id 혹은 data의 값이 변경 될 때 실행

    // nav('/',{replace : true}); => 화면 자체가 구성 된 다음에 바로 함수가 실행, nav()가 원활하게 렌더링 되지 않음
    // const getCurrentData = ()=>{
    //     const currentItem = data.find((item) => String(item.id) === String(params.id));
    //     if(!currentItem){
    //         window.alert('잘못된 경로 입니다');
    //         nav('/',{replace : true});
    //     }
    //     return currentItem;
    // }
    // const currentDiary = getCurrentData();
    // console.log(currentDiary);

    const currentDiary = useDiary(params.id);
    
    const onSubmit = (input)=>{

        if(window.confirm("일기를 정말 수정 하시겠습니까?")){
            onUpdate(params.id, input.createDate.getTime(), input.emotionID, input.content);
            nav('/',{replace : true});
            // 일기 작성 후 "홈페이지"로 이동하기 + 이전 페이지로 못 돌아가게
        }
    }

    return (
        <div className="edit">
            <Header title="일기 수정하기"
                leftChild={<Button text={"< 뒤로 가기"} onClick={()=>nav(-1)}/>}
                rightChild={<Button text={"삭제 하기"} type={"NEGATIVE"} onClick={onClickDel}/>} />

            <Editor initData={currentDiary} onSubmit={onSubmit} />
            {/* */}
        </div>
    )
}

export default Edit;