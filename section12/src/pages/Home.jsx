import {useState, useContext} from 'react';
import {DiaryStateContext} from '../App';

import Header from "../components/Header";
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';

const getMontylyData = (pivotDate, data) =>{

    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1,0,0,0).getTime();
    // beginTime : 내가 접속 한 시점의 년-월 + 1일 0시 0분 0초 

    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0,23,59,59).getTime();
    // endTime : 내가 접속 한 시점의 년 + ((월+1) + 0일) 23시 59분 59초 
    //              [((월+1) + 0일) = 다음달의 0일] = 즉, 이번달의 마지막 날

    return data.filter((item)=> beginTime <= item.createDate && item.createDate <= endTime); 
    // beginTime 보다 이상이고, endTime보다 이하면 item.createDate가 이번달이라는 것
}
// 어차피 Home() 컴포넌트에 호출해서 사용할 함수라면,
// 이렇게 외부에 작성하여 사용하는 것도 무방하다!


const Home = ()=>{

    const data = useContext(DiaryStateContext);

    const [pivotDate, setPivotDate] = useState(new Date());

    const monthlyData = getMontylyData(pivotDate, data);
    console.log(monthlyData);

    const onIncMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1));
    };

    const onDecMonth = ()=>{
        setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1));
    };

    return (
    <div> 
        
        <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
                leftChild={<Button text={"<"} onClick={onDecMonth}/>} 
                rightChild={<Button text={">"} onClick={onIncMonth}/>}/>
        <DiaryList data={monthlyData} />
    </div>
    )
}

export default Home;