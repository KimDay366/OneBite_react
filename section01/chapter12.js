
// 1. 함수 표현식
// 1-1. 기본 표현식 & 변수에 담아 사용용
function funcA(){
    console.log("A");
}

let varA = funcA; // 함수를 호출한게 아니라, 변수에 담아버림

console.log(varA);
// [실제 표기]
// ƒ funcA(){
//    console.log("A");
// }

varA();
// varA() → 하면 funcA()의 결과값이 나옴


// 1-2. 변수 응용
let varB = function funcB(){
    console.log("B");
}

varB();

// 변수 자체에 함수를 담는건 똑같지만, 선언 자체를 변수에 한정해서 했기 때문에 
// funcB(); 해도 아무일도 일어나지 않음. 
// 호이스팅도 당연히 되지 않음;

// 1-3. 익명함수
let varBB = function (){ // = 익명함수
    console.log("BB");
}
// 변수에 직접 담은 함수는 명칭으로 호출을 해도 실행되지 않으니, 
// 함수 명을 생략해도 문제가 되지 않음

varBB();


// -----------------------------------------------------------------------

// 2. 화살표 함수
// 함수를 좀 더 간결하게 사용할 수 있는 방식

let varC = function(){
    return 1;
}

let varCC = ()=>{ // function : =>로 축약
    return 1;
}

let varCCC = ()=> 1; // 바로 return 되는 경우 {} 내용 바로 작성해서 단축 가능 

console.log(varC(),varCC(),varCCC());


let varD = (num)=> num + 1; // 매개변수도 넣을 수 있음
console.log(varD(5));

let varDD = (num)=> { // 내용이 길어지면 꼭 중괄호 사용해서 작업
    console.log(num);
    return num + 1
};
console.log(varDD(10));

