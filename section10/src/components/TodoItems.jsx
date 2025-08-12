import './TodoItems.css'

import {memo} from 'react';

const TodoItems = ({id, isDone, content, date, onUpdate, onDelete})=>{

    const onChangeCheck = ()=>{
        onUpdate(id);
    }

    const clickDel = () =>{
        onDelete(id);
    }

    return (
    <div className="todoItems">
        <input onChange={onChangeCheck} readOnly checked={isDone} type="checkbox" />
        <h6>{content}</h6>
        <p>{new Date(date).toLocaleDateString()}</p>
        <button onClick={clickDel}> Del</button>
    </div>)
}

// export default memo(TodoItems);
// 전달받은 onUpdate, onDelete 함수의 경우 객체로 선언된 함수이므로,
// 부모 요소가 리렌더링 될 때마다 새로운 저장 주소를 할당받아 함수가 저장 되어 있음(함수를 실행했는지의 여부와 상관 없음)
// 따라서 TodoItems의 memo()입장에서는 리렌더링 되어 새로운 주소를 받으니 새로운 Props로 인식하여 최적화가 제대로 이루어 지지 않음

// 고차 컴포넌트 (HOC = Higher Order Component)
// export default memo(TodoItems, (prevProps, nextProps)=>{
//     // 반환값에 따라, Props가 바뀌었는지 판단
//     //  True = Props 가 안바뀜 
//     //  False = Props 가 바뀜 + 리렌더링 진행 

//     if(prevProps.id !== nextProps.id ) return false;
//     if(prevProps.isDone !== nextProps.isDone ) return false;
//     if(prevProps.content !== nextProps.content ) return false;
//     if(prevProps.date !== nextProps.date ) return false;

//     return true;
// });
// memo() : 얉은 함수 비교, onUpdate, onDelete 함수 비교는 생략하고 진행했음. 
//          또한 모든 Props를 일일이 선택하여 비교하고 결정하였음 
// => 코드가 복잡하고, Props의 이름이 바뀌면 해당 설정도 바꿔야하며, 새로운 Props가 나오면 추가 설정을 해야하는 등 관리가 어려움

//    따라서, 애초에 onUpdate, onDelete 함수가 새로고침 되도 주소가 업데이트 되지 않으면 쉽게 해결 가능


// APP.jsx 에서 useCallback을 이용해 객체함수의 주소가 바뀌지 않도록 설정 완료 함
export default memo(TodoItems);
