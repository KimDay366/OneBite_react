const promise = new Promise((res, rej)=>{
    // 비동기 작업을 실행하는 실제 함수 = executor
    // res = resolve(해결), 성공으로 바꿔주는 함수 호출 자리. 이름 맘대로
    // rej = reject(거부), 실패로 바꿔주는 함수 호출 자리. 이름 맘대로
    // 함수를 쓰고, 안에 있는 인수로 "메세지"를 전달 할 수 있다

    setTimeout(()=>{
        
        const num = 5;

        if(typeof num === "number"){

            res(num + 10); 
            // [[PromiseState]] : "fulfilled"
            // [[PromiseResult]] : 14
            // 조건에 맞으면 res를 사용해서 
            // 최종적으로 [ 상태 = 성공 / 값 = 14 ] 로 바뀜

        } else{

            rej("숫자가 아님");
            // [경고문] Uncaught (in promise) 숫자가 아님
            // [[PromiseState]] : "rejected"
            // [[PromiseResult]] : 숫자가 아님
            // 조건에 맞지 않으면 rej를 사용해서 
            // 최종적으로 [ 상태 = 실패 / 값 = 숫자가 아님 ] 로 바뀜
        }

    }, 1000);
});


// then 메서드 
// = 그 후에 = promise가 성공 된 이후에 콜백함수 실행
// promise의 resolve 된 결과를 받아서 매개변수로 사용 가능
promise.then((v)=>{console.log(v)});

// catch 메서드 
// promise가 실패 한한 이후에 콜백함수 실행
// promise의 reject 된 결과를 받아서 매개변수로 사용 가능
promise.catch((e)=>{console.log(e)});

// promise 체이닝 (체이닝 = 여러 메서드를 연결하는 것)
// then, catch 메서드 모두 연결해서 사용 가능 = 성공실패를 한번에 알 수 있음
promise
    .then((v)=>{console.log(v)})
    .catch((e)=>{console.log(e)});