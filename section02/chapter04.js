// 1. Spread 연산자
// -> Spread : 흩뿌리다, 평치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 1.1 배열 Spread 연산 작업
let arr1 = [1,2,3];
let arr2 = [4,5,6];

// arr1을 arr2 에 넣어서 [4, 1,2,3, 5,6] 하고 싶다

let arr3 = [4,arr1[0], arr1[1], arr1[2], 5,6];
// 이렇게 하면 배열이 줄거나 늘어날 때 제대로 적용하지 못함

let arr4 = [4, ...arr1, 5,6];

console.log("arr3 : " + arr3);
console.log("arr4 : " + arr4);

arr1.push("칠"); // push를 이용해서 값을 넣으면, arr4에도 선언 해 주어야 함
arr4 = [4, ...arr1, 5,6]; // 선언하지 않으면 값이 들어가도 적용되지 않음
console.log("arr3 : " + arr3);
console.log("arr4 : " + arr4);
// 맨 위에 최초 선언한 배열이 수정 되면 선언하지 않아도 바로 적용!

// 1-2. 객체 Spread 연산 작업
let obj1 = {
    a:1,
    b:2,
};

let obj2 = {
    a:obj1.a,
    b:obj1.b,
    c:3,
    d:4,
};

let obj3 = {
    ...obj1,
    c:3,
    d:4,
};

console.log(obj2);
console.log(obj3);


// 1-3. 함수에서 사용하기

function fa(a,b,c){
    console.log(a,b,c); 
};

fa(...arr1); // arr1 = [1,2,3] 값이 그대로 들어가게 됨
// 단 함수에서 사용 시 해당 배열,객체와 동일한 수 만큼 변수 사용해야 함
// [rest 매개변수] 라는걸 사용하면 보다 편리해짐!




// 2. Rest 매개변수
// -> rest : 나머지 = 나머지 매개변수


function funb(...rest){
    console.log(rest);
}

funb(...arr1);

function func(one, ...rest){
    console.log(rest);
}
func(...arr1);
// 꼭 지정된 변수명을 가져야 하는는 배열의 값은,
// ...rest 앞에 명칭으로 지정하면 됨. 
// 나머지만 ...rest에 저장되므로 중간에 있는 배열 값을 가지려면
// 앞에 있는 값들의 변수도 모두 지정 해야함

const namugeNum = [1,2,3,4,5,6,7,8,9];

function fund(one, two, ...namuge){
    console.log(namuge); 
    // one, two는 각각 1, 2로 지정되고
    // [3,4,5,6,7,8,9]는 namuge에 저장됨
    // ...rest의 이름은 자유롭게 지정 가능함.
    // 단 ...rest 매개변수를 쓴 뒤에 변수 선언은 안됨!!!!
}

fund(...namugeNum);
// rest 매개변수의 이름은 자유롭게 지정 가능함.
// 단 ...rest 매개변수를 쓴 뒤에 변수 선언은 안됨
