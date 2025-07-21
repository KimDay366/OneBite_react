// 콜백함수 (collback function )
// 자신이 아닌 다른 함수에 인수로써 전달 된 함수를 의미

function main(val){
    val();
}

function sub(){ // 콜백함수
    // console.log("small");
}

main(sub);
// main 함수 안에 sub 함수가 전달되어서,
// val() = sub() 와 같게 된 상황



// --------------------------------------------------------

// 1. 콜백함수
// 1-1. 콜백함수 란?
function main1(val){
    // console.log("start");
    // val(); 
    // 콜백 함수는 메인 함수 작업 중 원하는 시점에 실행 시키기 위한 것 
    // console.log("end");
}

function sub1(){
    console.log("sub1");
}

main1(sub1);


// 1-2. 콜백 함수 사용법 응용!
main1(function sub2(){
    console.log("sub2")
}); // 콜백 함수를 인수 값 자리에 직접 넣어서 사용해도 됨

main1(function (){
    console.log("sub3")
}); // 콜백 함수를 인수에 넣을 때는 익명 함수로 사용 가능

main1(()=>{
    console.log("sub3")
}); // 콜백 함수 화살표 함수로도 축약해서 사용 가능




// 2. 콜백 함수의 활용
function repeat(count){
    for (let idx = 1; idx <= count; idx ++){
        console.log("기존: " + idx);
    }
}

function repeatDouble(count){
    for (let idx = 1; idx <= count; idx ++){
        console.log("기존: " + idx * 2);
    }
}

repeat(5);
repeatDouble(5);

// 콜백함수를 사용하는 경우
function upRepeat(count, callFunc){
    for (let idx = 1; idx <= count; idx ++){
        callFunc(idx);
    }
}

upRepeat(5,(i)=>{console.log(i)}); 
upRepeat(5,(i)=>{console.log(i*2)});
// 콜백 함수를 인수자리에 넣고,
// 반복문이 실행 될 때마다 콜백 함수도 같이 실행되는 구조 