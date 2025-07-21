// 비동기 방법 처리하기 
// 2. Promise

// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는
// 자바스크림트의 내장 객체

// promise는 비동기 작업을 감싸는 객체이다
// : 비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등 가능
// : 그 중에서 가장 중요한 비동기 작업 실행, 상태 관리, 결과 저장 배움

// Promise의 3가지 상태
// 1. 대기 (Pending) : 아직 작업이 완료되지 않은 상태
//   ↓         ↓  해결 resolve
//   ↓       2. 성공 (Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
//   ↓  거부 reject
// 3. 실패 (Rejected) : 비동기 작업이 실패한 상태
// => 세가지 상태를 가지고 비동기를 컨트롤 함


// Promise(콜백함수) 넣어서 사용하기
const promise = new Promise(()=>{
    // 비동기 작업을 실행하는 실제 함수 = executor
    // promise를 호출하면 자동으로 콜백함수를 실행해서 비동기 작업 시작

    setTimeout(()=>{console.log("hi");}, 2000);
}); // 생성자를 이용해서 객체 불러오기

// console.log(promise); 
// promise 객체 출력
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"   === 대기 상태 의미
// [[PromiseResult]]: undefined  === 결과 값은 대기 상태이므로 undefined



// Promise에 인자 resolve / reject 넣어서 사용하기기
const promise = new Promise((res, rej)=>{
    // 비동기 작업을 실행하는 실제 함수 = executor
    // res = resolve(해결), 성공으로 바꿔주는 함수 호출 자리. 이름 맘대로
    // rej = reject(거부), 실패로 바꿔주는 함수 호출 자리. 이름 맘대로
    // 함수를 쓰고, 안에 있는 인수로 "메세지"를 전달 할 수 있다

    setTimeout(()=>{
        console.log("hi");

        res("성공"); 
        // [[PromiseState]] : "fulfilled"
        // [[PromiseResult]] : "성공"
        // resolve를 사용해서 최종적으로 성공으로 상태 바뀜


        rej("왜 실패 햇지?");
        // [경고문] Uncaught (in promise) 왜 실패 햇지?
        // [[PromiseState]] : "rejected"
        // [[PromiseResult]] : "왜 실패 햇지?"
        // reject를 사용해서 최종적으로 실패로 상태 바뀜


    }, 2000);
}); // 생성자를 이용해서 객체 불러오기

setTimeout(()=>{
    console.log(promise); 
}, 3000);