import {useEffect} from 'react';


const Even = ()=>{

    useEffect(()=>{
        // 클린업, 정리함수 : useEffect가 끝날때 실행 되는 함수
        return () =>{
            console.log('Unmount! Finish!');
        }
    },[]);

    return <div> Even </div>
}

export default Even;