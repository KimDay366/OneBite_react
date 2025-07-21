// 단락 평가(Short-circuit Evaluation) 이란?

let varA = false;
let varB = true;

console.log( varA && varB );
// AND 연산자 
// = 앞에 있는 [varA = fasle] 이기 때문에 뒤에 무엇이 나오든 false이므로
//   뒤에 있는 변수까지 확인하지 않고 바로 종료 됨

console.log(varB || varA);
// OR 연산자
// = 앞에 있는 [varB = true] 이기 때문에 뒤에 무엇이 나오든 true 이므로
//   뒤에 있는 변수까지 확인하지 않고 바로 종료 됨


function returnFalse(){
    console.log("retrun False");
    return false;
}

function returnTrue(){
    console.log("retrun True");
    return true;
}

console.log(returnFalse() && returnTrue());
// 콘솔창에 "return False"만 나옴 
// = 앞쪽 함수 연산자에만 접근하고 뒤쪽 함수는 접근 안함
// = 단락 평가가 이루어 짐

console.log(returnFalse() || returnTrue());
// 콘솔창에 "return False" / "return True" 모두 나옴 
// = 앞쪽 함수 연산자로는 최종 결과가 정확히 False / True를 확실히 할 수 없으므로
// = 단락 평가가 이루어 지지 않음



// 앞서 배운 truthy & falsy 를 이용해서도 구조 정리가 가능함함
function returnFalsy(){
    console.log("Falsy");
    return undefined;
}

function returnTruthy(){
    console.log("Truthy");
    return 10;
}

console.log(returnFalsy() && returnTruthy());


// 단락 평가 활용 사례

function printName(person){

    
    // if(!person){
    //     console.log("!!! not Properties !!!");
    //     return;
    // } else{
    //     console.log(person.name);
    // }

    const nameCheck = person && person.name;
    console.log(nameCheck || "이름 없음");
    // 단락평가로 좀 더 간결하게 확인 가능

}


// true || true = 앞 쪽 True 값 출력
// true && true = 뒷 쪽 True 값 출력

let person_js = {name : "js" };
printName(person_js); 
// person_js에 값이 있고 = {} => True
// person.name 도 값이 있음 = "js" => Ture
// 따라서 nameCheck은 True가 됨 
// 콘솔에는 nameCheck 의 True 값인 "js" 가 출력

let person_jh;
printName(person_jh);
// person_jh 에 값이 없음 = undefined => False 
// 따라서 nameCheck은 false가 되고, 단락평가 되서 바로 콘솔로 넘어감
// 콘솔에 OR 이므로 앞에서 False가 걸렸기 때문에 
// 뒤에 나온 "이름없음" = True가 출력됨
