// 비동기 방법 처리하기 
// 1. 콜백함수

function task(){
    setTimeout(()=>{
        console.log("hi");
    }, 1000);
}

task();


function add(a,b){
    setTimeout(()=>{
        const sum = a + b;
        console.log(sum);
    }, 2000);
}

add(1,2);


function addCall(a,b,callback){
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    }, 2500);
}

addCall(5,2, (v)=>{
    console.log(v);
});

// addCall(5, 2, (v)=>console.log(v))로 addCall()함수를를 호출
//   ↓
// 각 인자에 맞게 내용이 들어감감
// function addCall(a=5, b=2, callback=(v)=>console.log(v))
//   ↓
// setTimeout(() => { ... }, 2500)으로 일단 2.5초 대기기
//   ↓   
// 내부의 "const sum = a + b;" 이 먼저 실행되어 "sum = 7"이 됨됨
//   ↓
// callback(sum) 자리에 (v)=>console.log(v)가 들어가고 
// (sum)=>console.log(sum) === console.log(7) 가 됨됨
//   ↓
// 웹 브라우저 출력: 7
// 여기에서 인자로 사용한 callback은 단순한 변수 이름이고, 
// callback()는 인자가 함수라는 의미로 생각해야함
// callback은 다른 단어로도 바뀔수 있음 (cb, fn 등등)




// 실전 : 음식을 주문하는 상황 aka 배민

function orderFood(cb){
    setTimeout(()=>{
        const food = "hamberger";
        cb(food);
    }, 2500);
};

function cooldownFood(food, call){
    setTimeout(()=>{
        const cdf = `식은 ${food}`
        call(cdf);
    }, 1000);
}

function freezeFood(cf, callbbb){
    setTimeout(()=>{
        const nf = `얼리자! ${cf}`;
        callbbb(nf);
    }, 1000)
}


orderFood((fd)=>{
    console.log(fd);

    cooldownFood(fd, (coolfood)=>{
        console.log(coolfood);

        freezeFood(fd, (fzf)=>{
            console.log(fzf)
        });
    });
}); 

// fd 인수는 콜백함수로 계속 사용됨
// 콜백 함수가 많아지면 인덴트(indent: 들여쓰기)식 코드가 됨
// 이런 구조를 "콜백 지옥"이라고 하는데, 이렇게 운영 되면 안됨