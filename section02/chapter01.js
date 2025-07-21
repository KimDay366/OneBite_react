// Truthy & Falsy란?
// 참이나 거짓을 의미하지 않은 값도 "조건문 내에서 참이나 거짓으로 평가"하는 특징
// 이를 이용하면 조건문을 간결하게 만들 수 있음


if(123){
    console.log("ture");
}else{
    console.log("false");
} //Truthy 한 값

if(undefined){
    console.log("ture");
}else{
    console.log("false");
} // Falsy 한 값 



// 1. Falsy한 값 

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주 큰 값을 저장할 때 쓰는 것

if(f4){
    console.log("turthy");
}else{
    console.log("falsy");
} // Falsy 한 값 




// 2. Truthy 한 값
// = 7가지 "Falsy한 값"들을 제외한 모든 값

let t1 = "hello";
let t2 = 123
let t3 = -123; // 음수
let t4 = []; // 배열열
let t5 = {}; // 객체
let t6 = ()=>{}; // 함수

if(t3){
    console.log("turthy");
}else{
    console.log("falsy");
} // Truthy 한 값 




// 3. 활용 사례

function printName(person){

    // 비정상 작동 상황 해결 : 따라서 넘어온 변수가 제대로 된건지 필터링 함
    // 이 함수의 경우 객체 변수인지 확인하는 과정을 거치는 것
    // 변수가 선언만 되고 객체를 가지지 않으면 "undefinde"가 되어 "Falsy" 처리 됨
    // 변수에 null이 선언된 경우(= 잘못된 값이 들어감)도 걸러낼 수 있음
    if(!person){
        console.log("!!! not Properties !!!");
        return;
    } else{
        console.log(person.name);
    }

    // 아래의 방법으로 해도 되지만, 실제 함수가 많아지면 너무 복잡해보이므로
    // 간략하게 위의 방식으로 사용!
    // if(person === undefined || person === null){
    //     console.log("!!! not Properties !!!");
    //     return;
    // } else{
    //     console.log(person.name);
    // }
}

// 정상 작동 방식 : 객체 선언 후 name 프로퍼티 가져오기
let person_js = {name : "js" };
printName(person_js); 


// 비정상 작동 상황 : 변수만 선언되고 객체 프로퍼티가 채워지지 않음
// 이러한 경우 JS상에서 프로퍼티를 찾을 수 없다고 나옴
let person_jh;
printName(person_jh);