import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext, DiaryStateContext } from '../App';

const useDiary = (id)=>{
    // 함수의 앞에 'use'를 사용하면 custom hook이 됨

    const data = useContext(DiaryStateContext);
    const [currentDiary, setCurrentDiary] = useState();

    const nav = useNavigate();

    
    useEffect(()=>{
        const currentItem = data.find((item) => String(item.id) === String(id));

        if(!currentItem){
            window.alert('잘못된 경로 입니다');
            nav('/',{replace : true});
            // 화면 자체가 구성 된 다음에 바로 렌더링이 진행, 원활하게 이뤄지지 않음
        }

        setCurrentDiary(currentItem);
        // return currentItem;
        // useEffect 에서 return 값을 저장 하여 사용 할 수 없으므로
        // useState 를 사용해서 데이터를 사용 할 수 있도록 업그레이드 진행

    }, [id]); // Url Id 혹은 data의 값이 변경 될 때 실행

    return currentDiary;
}

export default useDiary;