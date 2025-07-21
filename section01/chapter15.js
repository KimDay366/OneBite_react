 
 // 객체 (Object)란?
 // 자료형 중 원시타입이 아닌 객체 타입의 자료형
 // 여러가지 값을 동시에 저장할 수 있는 자료형

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 = 대부분 사용하는 방식


// 2. 객체 프로퍼티 = 객체 속성
// 프로퍼티 : 키 + 값, 갯수 제한 없음
// 키 : 문자 혹은 숫자만 사용, 띄어쓰기 쓰는 경우 "" 사용
// 값 : 데이터 타입 제한 없음
let person = {
    name : "js", // key(키) : value(값)
    age : 30,
    hobby : true,
};


// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근하기 
let name = person.name; // 점 표기법
console.log(name); // 타입스트립트 경고 표기, 제대로 실행 되는 것

let nick = person.nick;
console.log(nick); // undefined 표기

let age = person["age"]; // 괄호 표기법
console.log(age);

let ageppt = "age"; // 프로퍼티 키값을 변수로 선언해서 확장되게 사용 가능
let agee = person[ageppt];
console.log(agee); 


// 3-2. 새로운 프로퍼티를 추가하기
person.birth = 910522;
person["marry"] = false;

console.log(person);



// 3-3. 프로퍼티 수정하기
person.age = 35;
person["name"] = "kjs";

console.log(person);



// 3-4. 프로퍼티 삭제하기
delete person.birth; 
delete person["marry"];

console.log(person);



// 3-5. 프로퍼티 존재 유무 확인하기
// 연산자 in : "왼쪽 키"가 오른쪽 객체 안에 있는지 물어 보는 연산자
let result1 = "name" in person; 

console.log(result1);
