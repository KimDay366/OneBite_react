import {useState} from 'react';
import {useNavigate} from "react-router-dom";

import Button from './Button';
import DiaryItem from './DiaryItem';

import './DiaryList.css';

// 전체 data가 아닌 특정 데이터만 받아 사용할 것이기 때문에,
// 부모 컴포넌트 Home()에 Props로 받았음 

// Context로 받으면, 부모 컴포넌트에서 필터링 한 것과 동일하게 필터링 필요

const DiaryList = ({data}) =>{

    const nav = useNavigate();

    const [sortType, setSortType] = useState('latest');

    const onChangeSort = (e)=>{
        setSortType(e.target.value)
    }

    function getSortData(){
        return data.toSorted((a,b)=>{
            if(sortType === 'oldest'){
                return Number(a.createDate) - Number(b.createDate);
            }else {
                return Number(b.createDate) - Number(a.createDate);
            }
        }); 
        // 사전순으로 비교하는 toSorted() => 객체 비교시에는 콜백함수를 넣어 기준을 만들어야함
        // 안전한 비교를 위해 비교할 값을 Number() 타입으로 변경
    }

    const sortData = getSortData();

    return (
        <div className="diaryList">
            <div className="menu_bar">
                <select onChange={onChangeSort}>
                    <option value={"latest"}>최신순</option>
                    <option value={"oldest"}>과거순</option>
                </select>
                <Button onClick={()=>nav(`/new`)} text={'새 일기 쓰기'} type={'POSITIVE'}/>
            </div>
            <div className="list_wrapper">
                {sortData.map((item)=><DiaryItem key={item.id} {...item}/>)}
            </div>  
        </div>
    )
}

export default DiaryList; 