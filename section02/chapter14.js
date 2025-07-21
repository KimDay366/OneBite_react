// 비동기 작업 처리하기
// 3. Async & Await

// 1. async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 프로미스를 반환하도록 변환 해 주는 키워드

// 앞에 붙은 async로 인하여 비동기 함수가 되어버림 
// => 결과 값을 promise에 저장하는 함수가 되어버림
async function getData(){
    return {
        name : "js",
        id : "kimjs",
    }// user data를 반환
}

async function getDataPrm(){
    return new Promise((resol)=>{
        setTimeout(()=>{
            resol({
                name : "js",
                id : "kimjs",
            });
        });
    })// async가 선언되면 발생하는 현상을 promise로 변환
};

console.log(getData());
// Promise {<fulfilled>: {…}}
//  [[Prototype]]: Promise
//  [[PromiseState]]: "fulfilled"
//  [[PromiseResult]]: Object
//          id: "kimjs"
//          name: "js"
//          [[Prototype]]: Object



// 2.await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리 되기를 기다리는 역할
// then 메서드를 기다릴 필요가 없어짐

//[기존] then 메서드를 사용함함
function printData(){
    getData().then((re)=>{
        console.log(re);
    });
};

printData();


async function printDataAwa(){
    const userdata = await getData();
    console.log(userdata);
};

printDataAwa();