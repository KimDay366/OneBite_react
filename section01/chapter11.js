
// 함수
// 중복으로 작성된 유사한 기능을 하는 코드를 한번에 작성
// 동일한 기능에 대해 여러번 사용 가능
// 일일이 수정하지 않아도 됨

// 함수는 선언과 호출을 모두 해야만 실행이 이루어짐
// 호이스팅 : 함수 호출을 먼저 하고, 함수 선언을 해도 작동함.

// 함수 호출
greeting();

// 함수 선언
function greeting(){
    console.log("hello");
}



// 실습 : 직사각형 넓이를 구하는 함수 만들기
function getArea(wid,hei){
    // function 함수(매개변수, 매개변수){}

    let area = wid * hei;

    console.log("가로 : " + wid);
    console.log("세로 : " + hei);
    console.log("너비 : " + area);

    
    function another(){ // 중첩함수 : 함수 안에 또 다른 함수를 넣을 수 있음
        console.log("play");
    }

    another();

    return area;
    // return = 함수가 끝나고 반환하는 값, 내보내는 결과값
    // return문이 끝나면 함수가 종료 되므로, 그 이후에 내용을 작성해도 실행되지 않음
}

getArea(20,50);
// 함수(인수,인수)
// 인수가 매개변수를 통해 전달되어 함수 안에서 값으로 사용 됨.

let area1 = getArea(10,20); // return된 area"200"이 area1 값이 됨
console.log("리턴 : " + area1);