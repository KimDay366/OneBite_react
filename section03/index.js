
// node JS를 사용하려면 [package.json]을 만들어야 함

// 1. package.json 만들기
// 터미널에 "npm init" 명령어 입력
// 여러 설정창이 나오는데 알맞게 입력 후 엔터

// 2. 사용할 js 파일 연결하기
// 내용을 입력 한 후 터미널에서 "node index.js" 입력하면 실행 됨
// 자동 실행을 하기 위하여 [package.json] 중간 부분의 "script"에
// 해당 명령어를 입력하여 메크로 화 하기
// 실행 시에는 "npm run 명령어"를 터미널에 입력
// "start" : "node index.js",

console.log("hello, node!");

// -----------------------------------------------------


// node JS 모듈 시스템이란? (Module System)
// 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
// 모듈이란 = 웹 제작 시 [회원 관리 기능 / 장바구니 기능 / 결제 기능] 등등 각 기능별로 파일을 나눠서 개발하게 되는데, 기능 1개를 모듈로 생각하면 됨



// [주의] Common JS 와 ES Module 시스템은 함께 사용할 수 없다



// 1. Common JS(CJS) 모듈 시스템 
// require("./math"); => math.js 파일 연결하기

// const moduleData = require("./math");
// console.log(moduleData);
// console.log(moduleData.pl(1,2));

// const {plus, sub} = require("./math"); 
// 구조분해할당, 보내는 모듈과 이름 동일하게 사용

// console.log(plus(5,6));




// 2. ES Module(ESM) 모듈 시스템 => 최신 모듈 시스템
// 앞으로는 내가 ES Module 시스템을 쓰겟다 하기 위해서는
// package.json에 ["type" : "module"]선언을 해 주어야 함.

// import {add, sub} from "./math.js";

// console.log(add(1,2));


// import {bbb} from "./math.js";
// console.log(bbb(5,2));

// import mul from "./math.js";
// console.log(mul(1,5));
// default로 저장한 함수를 불러올 때 
// 1. 기존 이름이 아닌 신규 이름으로 새로 지어 불러올 수 있음
// 2. 중괄호 없이 그냥 이름 자체를 부름, 단일 default 이기 떄문

// import mul,{add, sub} from "./math.js";
// 이와 같이 서로 붙여서 여러개 불러오기도 가능.





// -----------------------------------------


// 라이브러리란?
// 프로그램을 개발 할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은것
// ex, 날짜 라이브러리 / 그래픽 라이브러리 등등

// https://www.npmjs.com/
// 온라인 사이트에서 원하는 라이브러리를 찾은 후 
// 터미널에 설치 명령어 "npm i [라이브러리 이름]" 를 입력하여 설치 

// 설치 후 현재 package에서 사용하기 위해 라이브러리 불러오기
// 라이브러리의 경우 경로가 아닌 "라이브러리 이름"을 불러오면 됨
import randomC from "randomcolor";

const color = randomC();
console.log(color);


// 외부 개발자와 협업 할 때 [node_modules] 파일은 공유하지 않음
// 이미 package.json 파일 내 "dependencies"에 사용한 라이브러리 목록이 저장되어 있으므로
// package.json 파일을 받고 터미널에 "npm i"만 입력하면 
// 자동으로 라이브러리를 모두 다운로드 받음