// 1. Date 객체를 생성하는 방법
// 생성자 함수 = new 와 함께 사용되어 데이터를 새롭게 만드는 함수
let date1 = new Date(); 
console.log(date1);

// 직접 입력하여 값을 정할 수 있음
let date2 = new Date("1997,01,05/10:10:10");
console.log(date2); 
// 문자열로 입력 시 [ - . , / 띄어쓰기 ] 5가지 방식으로 구분 가능함
// 시간의 경우 "/" 이용해서 날짜와 시간을 구분하고 각각 :로 시분초 작성

let date3 = new Date(1991,5,22,15,32,12);
console.log(date3); 
// 숫자로 입력하는 경우 모든 자릿수를 ","로 구분
// "05" 안되고 "5" 사용, 빈 숫자에 "0" 넣으면 안됨




// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초 (=세계 협정시, UTC)"로부터 
// 몇 ms가 지났는지를 의미하는 숫자값
// 1초 = 1000ms 

let ts1 = date1.getTime(); 
// getTime() 메서드 = 앞에 있는 변수의 타임 스탬프를 반환 해 주는 기능
console.log(ts1); 

let date4 = new Date(ts1);
// ms로 나오는 시간대를 우리가 인식 할 수 있는 시간으로 재 변환 해 줌
console.log(date1);
console.log(date4);




// 3. 시간 요소들을 추출하는 방법
// 각 타입 별로 메서드가 존재해서, 해당 메서드를 붙이면 됨
// JS에서는 달을 인덱스처럼 생각함, 1월 = 0 / 2월 = 1 / ...

let year = date3.getFullYear();
let monthS = date1.getMonth() + 1 ;
let monthN = date3.getMonth(); 
// getMonth() 는 직접 숫자를 입력한 것이 아니면 -1 되서 나옴
let date = date3.getDate();

let hour = date3.getHours();
let minute = date3.getMinutes();
let seconds = date3.getSeconds();

console.log(year,monthS, monthN, date);
console.log(hour,minute,seconds);





// 4. 시간 수정하기
// 각 타입 별로 메서드가 존재해서, 해당 메서드를 붙이면 됨
// JS에서는 달을 인덱스처럼 생각함, 1월 = 0 / 2월 = 1 / ...

console.log(date2);

date2.setFullYear(2020);
date2.setMonth(5); //6월 입력, jun
date2.setDate(30);
date2.setHours(12);
date2.setMinutes(50);
date2.setSeconds(2);

console.log(date2);




// 5. 시간을 여러 포맷으로 출력 하기
let justDate = date2.toDateString(); // 시간 제외, 날짜만 출력
console.log(justDate);

let koreaDate = date2.toLocaleString(); // 한국식 날짜 표기로 바꿈
console.log(koreaDate);