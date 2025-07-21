// 배열 매서드 1. 요소 조작
// 배열 = 실무에서 요긴하게 사용되는 것
// 6가지의 요소 조작 메서드

// 1. push()
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 요소 추가 후 [길이 = length = 배열의 갯수] 를 반환함.
let arr1 = [1,2,3];
arr1.push(4);
arr1.push(1,2,3); // 여러 개 추가도 가능

let newlen = arr1.push(5);

console.log(arr1);
console.log(newlen); 
// push() 메서드의 기본 기능인 갯수 반환으로 인해 변수에는 수가 들어감




// 2. pop()
// 배열의 맨 뒤에 있는 요소를 제거하고, 
// 해당 값을 가지고 옴.
let arr2 = ["a", "b", "c"];
const popdel = arr2.pop();

console.log(arr2);
console.log(popdel);
// pop() 메서드의 기본 기능인 마지막 인수를 가져오는 기능으로 값을 가져옴




// 3.shift()
// 배열의 맨 앞에 있는 요소를 제거하고,
// 해당 값을 가지고 옴옴
let arr3 = ["a", "b", "c"];
const shdel = arr3.shift();

console.log(arr3);
console.log(shdel);
// shift() 메서드의 기본 기능인 맨 처음 인수를 가져오는 기능으로 값을 가져옴




// 4. unshift()
// 배열의 맨 앞에 새로운 요소를 추가하는 매서드
// 요소 추가 후 [길이 = length = 배열의 갯수] 를 반환함.
let arr4 = [1,2,3];
arr4.unshift(0);
arr4.unshift(-1,-2,-3); // 여러 개를 한번에 입력 가능

let newlen2 = arr4.unshift(-5);

console.log(arr4);
console.log(newlen2);
// unshift() 메서드의 기본 기능인 갯수 반환으로 인해 변수에는 수가 들어감



// push, pop 은 마지막 값을 제어하기에 빠름
// shift, unshift는 맨 앞에 값을 제어하므로 더 느림
// 되도록이면 [push, pop]으로 제어해서 연산 시 무리 안 가게 만들어야 함




// 5. slice()
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 배열.slice(시작 인덱스, 종료 인덱스 + 1);
// 종료 인덱스를 원하는 인덱스로 적으면 그 앞앞에 있는 값까지만 가져옴.

let arr5 = [1,2,3,4,5];
let arr6 = arr5.slice(2, 5);

console.log(arr5);// 원본 배열의 값은 그대로 유지 된다
console.log(arr6);

let arr7 = arr5.slice(2); // 종료 인덱스를 안 적으면 마지막까지 자동 반환
console.log(arr7);

let arr8 = arr5.slice(-2); // 맨 뒤에서 부터 n개 가져오기 할땐 음수 사용
console.log(arr8); 




// 6. concat 
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환

let arr11 = [1,2];
let arr12 = [3.4];

let con1 = arr11.concat(arr12);
let con2 = arr12.concat(arr11);

console.log(con1); // arr11 에 arr 12를 붙임
console.log(con2); // 반대로 붙임