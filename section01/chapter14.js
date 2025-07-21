 // 스코프 (Scope)
 // 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함.

 // 전역 스코프 : 전체 영역에서 모두 사용한 변수
 // 지역 스코프 : 특정 영역에서만 사용 가능한 변수

 let a = 1;

 function scp(){
    let b = 2;
    console.log(a);
    console.log(b);

    function scpp(){
        console.log("scope");
    }
 }

 if(true){
    let c = 3;
 }

 for(let i=0; i<10; i++){
    let d = i;
 }
 
 console.log(a);
//  console.log(b); 에러가 발생 함
//  console.log(c); 에러가 발생 함
//  console.log(d); 에러가 발생 함
// scpp(); 함수의 경우 함수 안에 쓴 경우에 한에서 지역스코프의 영향을 받아 에러가 발생함
