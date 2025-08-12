import {useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useParams, useSearchParams } from 'react-router-dom';
// useParams : '~/diary/150' 에서 마지막 페이지 고유의 ID를 가지고 오는 훅
// useSearchParams :  '~/?value=hello' 에서 검색창의 특정 문자열을 가지고 오는 훅 
import {DiaryStateContext} from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer'

import useDiary from '../hooks/useDiary';
import useTitle from '../hooks/useTitle';
import {getStringDate} from '../util/get-date'

const Diary = ()=>{
    
    useTitle(`뀨리의 하루`);
    
    // const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('value')); hello 출력, 다른 페이지에서 해볼것
    
    const params = useParams();
    // console.log(params); id:150 출력
    
    const nav = useNavigate();
    
    // 현재 기능은 Edit 페이지에서도 비슷한 기능을 하는게 있어서, 
    // custom Hook을 만들어 사용
    
    // 바로 아래 주석은 내가 만든 영역, 커스텀 훅으로 업그레이드 진행
    
    // const data = useContext(DiaryStateContext);
    // const showDiary = data.find((item)=> String(item.id) === String(params.id));
    
    const currentDiary = useDiary(params.id);
    
    if(!currentDiary){
        // 초기 로드시 currentDiary값이 완전 초기값인 undefined이기 때문에 아래와 같이 셋팅 필요
        return <div> 데이터 로딩 중 ... </div>
    };
    
    const {createDate, emotionID, content} = currentDiary;
    
    // get-date.js 모듈로 만들어서 거기에서 데이터 받아 사용
    // const titleDate = ()=>{
        //     const diaryDate = new Date(showDiary.createDate);
        //     let year = diaryDate.getFullYear();
        //     let month = diaryDate.getMonth() + 1;
        //     let day = diaryDate.getDate();
        //     if( month < 10 ){ 
            //         month = `0${month}`; 
            //     }
            //     if( day < 10 ){ 
                //         day = `0${day}`; 
                //     }
                //     return `${year}-${month}-${day}`;
                // }
                
    const titleDate = getStringDate(new Date(createDate));
                
    return <div> 
        
        {/* <Header title={`${titleDate()}  기록`} 
                leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}
                rightChild={<Button text={'수정하기'} onClick={()=>nav(`/edit/${params.id}`)}/>}/> 
            <Viewer emoId={showDiary.emotionID} content={showDiary.content}/>
                */}

        <Header title={`${titleDate} 기록`} 
            leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>}
            rightChild={<Button text={'수정하기'} onClick={()=>nav(`/edit/${params.id}`)}/>}/> 

        <Viewer emoId={emotionID} content={content}/>

    </div>
}

export default Diary;