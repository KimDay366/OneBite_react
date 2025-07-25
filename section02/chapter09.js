// 배열 메서드 3. 변형
// 5가지 배열 변형 메서드

// 1. filter()
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환
// 카테고리별 필터링, 검색 기능에 꼭 사용되는 메서드 

// 매개변수 item , idx , arr 모두 사용
// 변수 명은 변경 가능

let arr1 = [
    {name : "js", hb : "테니스"},
    {name : "jh", hb : "테니스"},
    {name : "hj", hb : "게임"},
];

// const tennisP = arr1.filter((item)=>{
//     if(item.hb === "테니스") return true;
// }); 아래 내용을 풀어 쓴 내용

const tennisP = arr1.filter((item)=> item.hb === "테니스" );

console.log(tennisP);


// =======================================================================


// 2. map()
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
// 프론트 엔드에서 가장 많이 사용하는 메서드

// 매개변수 item , idx , arr 모두 사용용
// 변수 명은 변경 가능

let arr2 = [1,2,3];
arr2.map((item, idx, arr) => console.log(idx, item));

const mapRe = arr2.map((item) => item *2);
console.log(mapRe); // map()은 결과로 배열을 반환

// 실용 팁 : arr1 배열에서 사람 이름만 뽑아서 배열로 만듬
let names = arr1.map((i)=>i.name);
console.log(names);


// =======================================================================



// 3.sort()
// 배열을 사전순으로 정렬하는 메서드
// 원본 배열을 완전히 바꿔 버림
let arr3 = ["t", "i", "a"];
console.log(arr3.sort());

let arr4 = [100, 2, 8, 6];
console.log(arr4.sort()); 
// 100,2,6,8 = 사전순으로 나오기 때문에 숫자의 경우 대소비교를 통해 정렬해야 함

// sort() 안에 대소비교를 할 수 있는 구문을 작성하는데,
// 기본적으로 1이 반환되면 비교했던 두개의 값 중 더 작은게 앞으로 오게 되고,
// -1이 반환되면 더 큰 값이 앞으로 오게 됨
// 0이 반환되면 두 값의 순서가 바뀌지 않음

// 이 방식을 사용하여 아래와 같이 오름차순, 내림차순으로 정렬이 가능함

// 오름차순 정렬 방법
const sortNum1 = arr4.sort((a,b) => {
    if( a > b ){
        return 1; // 1 : 더 작은 값이 앞으로, 즉 B가 A 앞으로
        
    }else if( a < b ){
        return -1; //  -1 : 더 큰 값이 앞으로 , 즉 A가 B 앞으로

    } else{
        return 0; // 0 : 바꿈 없음

    }
});
console.log(sortNum1);

// 내림차순 정렬 방법
const sortNum2 = arr4.sort((a,b) => {
    if( a > b ){
        return -1;  //  -1 : 더 큰 값이 앞으로 , 즉 A가 B 앞으로
        
    }else if( a < b ){
        return 1; // 1 : 더 작은 값이 앞으로, 즉 B가 A 앞으로

    } else{
        return 0; // 0 : 바꿈 없음

    }
});
console.log(sortNum2);
console.log(arr4); // 원본 자체도 바뀜.




// =======================================================================


// 4. toSorted()
// 정렬된 새로운 배열을 반환하는 메서드
// 원본 배열은 변하지 않음
let arr5 = ["i","a", "b"];
const newSorArr = arr5.toSorted();

console.log(arr5);
console.log(newSorArr);



// =======================================================================



// 5. join()
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = [1,2,3];
const joined1 = arr6.join();

console.log(arr6); // 기본 배열엔 변화 없음
console.log(joined1);

const joined2 = arr6.join("-");
console.log(joined2);


let arr7 = ["hi","nice","to"];
const joined3 = arr7.join("  !  ");
console.log(joined3);