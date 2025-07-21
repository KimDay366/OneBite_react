// promise 내부에 있는 숫자를 자동으로 넣어주는 방법

function add10(num){
    const promise = new Promise((res, rej)=>{
        // 비동기 작업을 실행하는 실제 함수 = executor
        // 함수를 쓰고, 안에 있는 인수로 "메세지"를 전달 할 수 있다
        
        setTimeout(()=>{

            // 값을 확인하던 num을 매게변수로 바꿔버림
            
            if(typeof num === "number"){
                
                res(num + 10); 
                // res = resolve(해결), 상태를 성공으로 바꿔주는 함수 호출
                
            } else{
                
                rej("숫자가 아님");
                // rej = reject(거부), 상태를 실패로 바꿔주는 함수 호출 
            }
    
        }, 1000);
    });

    return promise;
}

const play = add10(10);
// add10(10) = 해당 함수를 호출해서 값을 promise에 전달
// play = promise 자체가 저장됨

console.log(play); //결과값이 나오려면 then / catch 메서드 사용

// 1) 단순 결과만 확인
play
    .then((v)=>{console.log(v)})
    .catch((e)=>{console.log(e)});


// 2) 콜백 지옥 탈출하기
// [기존 콜백 지옥]
play
    .then((v)=>{
        console.log(v);

        const replay = add10(v);
        replay.then((rv)=>{
            console.log(rv)
        });
    }); 

// [return 사용]
play
    .then((v)=>{
        console.log(v);

        const replay = add10(v);
        return replay;
    
    }).then((rv)=>{
        //replay = add10(v); 값을 넘겨 받음
        console.log(rv); 
    });


// [축약 사용] = 변수 지정 없이 바로 promise 사용 
add10(5).then((v)=>{
        console.log(v);
        return add10(v);
        //replay 라는 변수 지정 없이 바로 promise 사용 가능
    
    }).then((rv)=>{
        console.log(rv); 
    });
 //콜백 지옥 없이도 무한 증식 가능;
add10(2).then((v)=>{
        console.log(v);
        return add10(v);
    
    }).then((v)=>{
        console.log(v);
        return add10(v);

    }).then((v)=>{
        console.log(v); 
    });



// [최종] 에러 메세지까지 잡기
// 중간에 잘못 된 값이 들어오면 다음 then을 실행하지 않고
// 맨 마지막 "catch"가 실행 됨
add10(3).then((v)=>{
        console.log(v); //13
        return add10(v);
    
    }).then((v)=>{
        console.log(v); //23
        return add10(v);

    }).then((v)=>{
        console.log(v); //33
        return add10(v);

    }).then((v)=>{
        console.log(v); //43
        return add10(v);

    }).then((v)=>{
        console.log(v); //53
        return add10(undefined);
    
    }).then((v)=>{
        console.log(v); //63
        return add10(v);

    }).then((v)=>{
        console.log(v);  //73

    }).catch((e)=>{
        console.log(e); // 에러 메세지 출력
    }); 
