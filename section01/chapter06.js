
// 형 변환 이란? (Type Casting)
// 어떤 값의 타입을 다른 타입으로 변경하는 것을 말함
// Number Type 10 => String Type "10"


// 1. 묵시적 형 변환(암묵적 형 변환) 
// 개발자가 직접 설정하지 않아도 알아서 JS엔진이 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result);
// 숫자와 문자를 덧셈하는 과정에서 전체가 String Type으로 형 변환 이루어짐



// 2. 명시적 형 변환 
// 개발자가 직접 함수등을 이용해 형 변환을 일으킴

// 2-1. 문자열 → 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 문자 "10"이 숫자로 변환되어 20 출력

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN => 문자가 포함되어 있어 함수로 변수를 숫자로 변경 하는게 안됬다

let strToNum3 = parseInt(str2); // parseInt() = 숫자값이 아닌 것을 포함하는 값도, 숫자만 뽑아내서 변환. 단, 숫자가 앞으로 나와 있어야 원하는 값을 제대로 변환 함
console.log(strToNum3); // 숫자 10으로 변환 됨


// 2-1. 숫자 → 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1);
