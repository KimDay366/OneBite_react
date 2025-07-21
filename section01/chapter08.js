
// 1. null 병합 연산자 
// → 존재하는 값을 추려내는 기능
// → null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; 
console.log(var4); // 10
// var1은 값이 없어서 undefined지만 
// "??" 연산자로 var2 값인 "10"이 입력되어 최종적으로 "10"이 출력됨 

let var5 = var2 ?? var3; 
console.log(var5); // 10
// var2와 var3 모두 값이 있으므로  
// "??" 연산자가 사용 되더라도 처음 나오는 var2 값인 "10"이 출력

// 현업 예시 : 정보 표기 시 "사용자 이름", "사용자 닉네임" 중 값이 있는 것을 표기하라
let userName = "김지선";
let userNick;

let displayName = userName ?? userNick;



// 2. typeof 연산자
// → 변수 값의 "타입"을 반환하는 기능을 하는 연산자
// → JS는 변수의 값이 변하면서 형 타입도 변화함

let var7 = 1; // var7 = 숫자형
var7 = "hello"; // var7 = 문자형

let type1 = typeof var7; 
console.log(type1);



// 3. 삼항 연산자
// → 항을 3개 사용하는 연산자 
// → JS 특성상 좌우 2항만 사용하는 경우가 대다수임. 
// → 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

// 요구사항 : 변수 res에 값을 넣는데, var8이 짝수이면 "짝" / 홀수이면 "홀"
let var8 = 11;
let res = var8 % 2 === 0 ? "짝" : "홀";

// 물음표 이전 = 조건 , True 출력값 : False 출력값

console.log(res);
