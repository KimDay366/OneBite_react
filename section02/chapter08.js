// 배열 메서드 2. 순회와 탐색

// 5가지 요소 순회 및 탐색 메서드

// 1. forEach()
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1,2,3];
arr1.forEach(function(item, idx, arr){
    console.log(idx, item);
});
// item : arr1 의 배열 값, 1,2,3 순서로 나옴
// idx : arr1의 인덱스 값, 0,1,2 순서로 나옴
// arr : arr1 배열 전체
// 변수 명은 변경 가능

let doubleArr = [];
arr1.forEach((item)=>{ doubleArr.push(item*2) });

console.log(doubleArr);


// 2. includes()
// 배열에 특성 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let findArr1 = arr2.includes(3);
let findArr2 = arr2.includes("3");

console.log(findArr1); // True, 마지막 요소인 3 찾음
console.log(findArr2); // false, 찾는 요소가 문자열 3이라 못 찾음



// 3. indexOf()
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let id1 = arr3.indexOf(2);
console.log(id1); // 1 : 인덱스 올바르게 불러옴

let arr4 = [2,2,2];
let id2 = arr4.indexOf(2);

console.log(id2); // 0: 동일한 값이 있는 경우 맨 앞에 나온 값을 불러옴

let id3 = arr4.indexOf(20);
console.log(id3); // -1 : 존재하지 않는 값을 표기 하는 것




// 4. findIndex()
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr5 = [1,2,3];
let findIdx1 = arr5.findIndex((item)=>{
    if(item === 2) return true;
}); // 해당 값을 찾으면 true를 반환 => 콜백 함수가 멈춤 => 해당 인덱스 저장

console.log(findIdx1); // 1 : 값 "2"의 인덱스만 반환


let findIdx2 = arr5.findIndex((item)=>{
    if(item % 2 !==0) return true;
}); 
// 해당 조건에 맞는 가장 첫번쨰 값을 찾으면 true를 반환 
// => 콜백 함수가 멈춤 => 해당 인덱스 저장

console.log(findIdx2); // 0 : 값 "1"의 인덱스만 반환하고 멈춤


let findIdx3 = arr5.findIndex((item)=>{
    if(item === 4) return true;
}); 
// 해당 조건에 맞는 값이 없음 => 인덱스 값으로 -1 저장

console.log(findIdx3); // -1 : 존재하지 않는 값을 표기 하는 것




// indexOf = 얕은 비교, 객체가 배열에 저장되면 못 찾음. 원시 타입 잘 찾음
// findIndex = 깊은 비교, 객체가 배열에 저장되면 찾음

let objArr = [
    {n : 1},
    {n : 2},
    {n : 3},
];

console.log(
    objArr.indexOf({n : 1})
); // -1 = 값을 못 찾는다 선언

console.log(
    objArr.findIndex((item)=>item.n === 1)
); // 0번째 있다고 찾을 수 있음.





// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데
// 요소를 그대로 반환

const fin = objArr.find((item)=>item.n === 1);
console.log(fin); // {n:1} 모두 불러옴