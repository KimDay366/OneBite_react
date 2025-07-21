// 구조 분해 할당
// 각 배열의 인수를 각각의 변수에 담는 것

// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3, 4, 5, 7];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 이렇게 하면 라인이 길어지고, 변수 선언도 계속 해야함

let [one, two, thr, fou, fiv = 5, six = 6] = arr;
// 각각 순서대로 할당 됨

console.log(one);
console.log(two); // 변수와 값 모두 배열의 순서를 지키면서 그대로 들어감
console.log(fou); // 값 배열이 부족해도 선언 가능, undefined 됨.
console.log(fiv); // 변수 배열 내부에서 기본값을 직접 입력하여 undefined 막음
console.log(six); // 변수 배열에 선언하는건 "기본값" 이기 때문에 값 배열에 값이 있으면 해당 순서의 값이 들어감 => 값 배열 결과인 "7"이 출력



// 2. 객체의 구조 분해 할당
// 객체의 구조 분해 할당을 하는 경우, 꼭 프로퍼티의 이름을 변수로 사용해야함
// 그래야만 값을 찾아서 매칭 해 줄 수 있음.
let person = {
    name : "킹뀨리",
    age : 35,
    love : "뉵보이",
    // job : "artist",
};

// let pname = person.name;
// let page = person.age;
// let plove = person.love;

// 프로퍼티의 이름을 써서 순서가 바뀌어도 제대로 값이 들어감
// 배열처럼 객체를 직접 추가 가능(기본값값)
let { name, love, age, job = "developer" } = person;
console.log(name, age, love, job);

// 변수 이름을 바꾸고 싶으면 "프로퍼티 : 변수명"으로 작성
let {name : myName, age : myAge, love : myLove} = person;
console.log(myName, age, myLove);


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 꼭 넘겨 주는 값이 객체여야 하고
// 받을때도 {} 객체로 받아야 함
const funcYY = ({name, love, age, job})=>{
    console.log("함수 : "+ name, age, love, job);
}

funcYY(person);