
// 1. 상수 객체 = 상수에 저장 한 객체

const animal = {
    cat : "야옹",
    dog : "멍멍"
}

// animal = { a : 1 } 상수에 저장 한 객체를 통쨰로 재선언 하는건 안됨
// 하지만 프로퍼티 "추가, 수정, 삭제"는 가능함
animal.tiger = "어흥";
animal.dog = "멍머엉";
delete animal.cat;

console.log(animal);



// 2. 메서드  = 값이 함수인 프로퍼티 

const person = {
    name : "js",

    // 메서드 선언 방법법
    say1 : function(){
        console.log("hi");
    },
    say2 : ()=>{
        console.log("hello");
    },
    say3(){
        console.log("bye");
    },
}

person.say1();
person.say2();
person.say3();
person["say3"]();
