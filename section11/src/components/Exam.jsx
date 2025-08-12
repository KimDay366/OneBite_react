import { useReducer } from "react";


function reducer(state, action){

    // 결과로 update 된 state를 내보내면 자연적으로 값이 업데이트 됨

    // action.type이 몇개 없는 경우 if문 사용
    // if(action.type === "INCREASE"){
        
    //     return state + action.data;

    // }else if( action.type === 'MINUS'){

    //     return state - action.data;
    // }

    // 보통은 switch문을 사용해서 작업
    switch(action.type){
        case 'INCREASE' : return state + action.data;

        case 'MINUS' : return state - action.data;

        default : return state;
    }
}

const Exam = () =>{
    const [state, dispatch] = useReducer(reducer, 5);

    const onClickPlus = ()=>{
        // 인수 : 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체 = type, data
        dispatch({
            type: 'INCREASE',
            data : 1,
        }); 
        // dispatch()가 호출이 되면, useReducer()인자에 따라 reducer()함수가 호출이 되고,
        // reducer()함수의 인자로 [state - 선언값, action - dispatch의 두개의 객체]가 전달 됨
    }

    const onClickMinus = ()=>{
        dispatch({
            type : "MINUS",
            data: 1,
        })
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}

export default Exam;