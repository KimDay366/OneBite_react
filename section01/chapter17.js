
// 배열(Array)란?
// 여러개의 값을 "순차적"으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array();  // 배열 생성자
let arrB = []; // 배열 리터럴, 많이 사용

let arrC = [1,2,3, true, "hello", null, undefined, ()=>{}, {},[]];
console.log(arrC);
// 함수, 같은 배열, 객체 등등 어떤 데이터 타입이던 상관없이 담을 수 있고, 
// 데이터 길이도 제한이 없다




// 2. 배열 요소 
// 인덱스 값을 사용해서 작업. 숫자 시작은 0부터

// 2-1. 요소 불러오기
let item1 = arrC[0];
let item2 = arrC[5];

console.log(item1, item2);



// 2-2. 요소 값 바꾸기
arrC[0] = "A";
console.log(arrC);
