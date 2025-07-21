
// 1. 변수 : 가능한 범위 내에서 언제든 값을 변환 할 수 있음 
let age ;

age = 30;

// 2. 상수 : 한번 선언하면 값을 변환할 수 없음
const birth = "1991.05.22" ; // 선언과 함께 초기 값도 입력(=초기화) 해야 함


// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $,_ 외 기호는 모두 사용 불가능 하다
let $_name

// 3-2. 숫자로 시작할 수 없다
let name2
let _2name
let $2name

// 3-3. 예약어(=자바스크립트에서 이미 명령어 등으로 사용하는 단어)를 사용할 수 없다.
// let let
// let if
// let while 등등

// 4. 변수 명명 주의점 : 누가 봐도 이해하기 좋은 변수명을 사용하는 것이 좋다
let a = 10;
let b = 3;
let c = a-b;

let sales = 10;
let refund = 3;
let total = sales - refund; 
