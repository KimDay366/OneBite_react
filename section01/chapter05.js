
// 자료형(Type) = 집합
// 동일한 속성이나 특징을 가진 원소들을 묶은 것
// ex. 고양이와 강아지는 [동물]이라는 집합으로 묶임

// 자료형(DataType) > 원시 타입
// Number, String, Boolean, Null, Undefined
// 기본형 타입이라고도 불림
// 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미함

// 자료형(DataType) > 객체 타입
// Object > Array , Funtion, REgexExp

// ---------------------------------------------------------

// 1. Number Type
let num1 = 30;
let num2 = 1.7;
let num3 = -50;

console.log("더하기 : " + (num1 + num2));
console.log("빼기 : " + (num1 - num2));
console.log("곱하기 : " + (num1 * num2));
console.log("나누기 : " + (num1 / num2));
console.log("나머지 값 : " + (num1 % num2));

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number
// 숫자 연산이 사용되었지만, 숫자가 아닌 무언가가 함께 들어가서 결국 숫자로는 표기 못하는 경우 나오는 결과값, ex. 세마리 * 2 => NaN




// 2. String Type
let myName = "김지선"; // 따옴표 또는 큰 따옴표로 꼭 감싸 주어야 명령 언어와 구분을 한다
let myLoc = "경기 용인";
let intro = myName + myLoc;

console.log(intro);

let introText = `${myName}은 ${myLoc}에 거주합니다`; 
console.log(introText);
// `` = backtic, 문자열을 동적으로 입력할 때 사용하는 것 = 템플릿 리터럴 문법




// 3. Boolean Type : true 또는 false 두가지 타입의 값을 사용하는 것
let isSwitchOn = true;
let isEmpty = false;




// 4. Null Type : 아무것도 없다, 진짜 값을 비워 두었다. 강제로 값을 비웠다.
let empty = null;



// 5. Undefined Type : (초기화 값이) 없다 = 아직 아무런 값을 할당하지 않았다는 의미
let none;
console.log(none); 