function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// [주의] Common JS 와 ES Module 시스템은 함께 사용할 수 없다

// 1. Common JS(CJS) 모듈 시스템 

// module.exports ={
//     plus : add,
//     // 사용할 이름 : 현재 모듈의 이름
//     // 전달 해서 사용할 이름과 현재 모듈에서 사용하고 있는 이름이 동일한 경우
//     // 인자 선언 없이 그냥 그대로 사용 가능
//     sub,
// }



// 2. ES Module(ESM) 모듈 시스템 => 최신 모듈 시스템
export {add, sub};

export function bbb(a, b){
    return a + b;
}
// 직접 함수 자체를 내보내는 것도 가능

// default 로 넘겨주기 

export default function multiply(a, b){
    return a * b;
}