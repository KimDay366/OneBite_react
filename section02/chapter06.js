// 순회(Iteration) 란?
// 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것을 말함



// 1. 배열 순회
let arr = [1,2,3];

// 1-1. 배열 인덱스
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// .length = 배열에 기본으로 가지고 있는 프로퍼티, 길이를 자동 저장함

let arr2 = [4,5,6,7,8];

for(let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}


// 1-2. for of 반복문 = 배열을 순회하기 위해서 만들어진 반복문
for(let item of arr){
    console.log(item);
}
// let item of arr => "arr" 배열 안에 있는 값을 한번씩 가지고 나옴


// =======================================================================

// 2. 객체 순회
let person = {
    name : "js",
    age : 35,
    hobby : "yarn"
}

// 2-1. Object.keys 사용
// => 객체에서 Key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for(let i = 0; i <keys.length; i++){
    console.log(keys[i]);
}; // 인덱스 선언 방법

for(let item of keys){
    console.log(item, person[item]);
}; // for of 반복문 방법


// 2-2. Object.values
// => 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);
console.log(values);

for(let i = 0; i <values.length; i++){
    console.log(values[i]);
}; // 인덱스 선언 방법

for(let item of values){
    console.log(item);
}; // for of 반복문 방법


// 2-3. For in 반복문
for(let key in person){
    const value = person[key];
    console.log(key, value);
}

// for of = 배열만 사용
// for in = 객체만 사용용