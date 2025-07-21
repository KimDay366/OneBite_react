
// 조건문(conditional Statement) 이란?
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// 대표적으로 if, Switch 조건문이 존재함



// 1. if 조건문 (if문)

let num = 10;

num = 5;
if(num>=10){
    // 조건이 참, true 일 때 실행되는 내용
    console.log("yes");
} else if(num >=5){
    // 첫번쨰 조건은 거짓, false 이지만 현재 조건은 참, true 일 때 실행
    console.log("mid");
} else{
    // 조건이 거짓, false 일 때 실행되는 내용
    console.log("no");
}




// 2. Switch 문
// if문과 기능은 비슷 해 보임 
// 다수의 조건을 처리할 떄 좋음

let animal = "js";

switch(animal){
// switch(사용할 변수 명)

    // case = 각 조건, 변수의 값값
    case "cat":{

        // 조건에 맞는 경우 실행되는 내용
        console.log("야옹");

        // break : 내용 실행 후 switch를 빠져 나간다는 선언, 안하면 아래 전부 다 나옴
        break;
    }
    case "dog":{
        console.log("멍멍");
        break;
    }
    case "tiger":{
        console.log("어흥");
        break;
    }

    default:{
        // 위 case 조건이 아닌 경우 해당 default 내용이 실행 됨
        console.log("뉴기 메롱");
    }
}