// 1. Use strict
// added in ES5
// use this for Vanila Javascript
'use strict';

// 2. Variable
// let (added in ES6) 
console.log("Hello World!");

// 전역 변수는 브라우저 켜지고 끝까지 갖고 있기 때문에 적게 만드는 게 좋음
let globalName = "global name";

{ // 중괄호 안에 있으면 콘솔창으로 확인 불가
	let name = "dahyeon";
	console.log(name);
	name = "hello";
	console.log(name);
	console.log(globalName);
}
	console.log(name);
	console.log(globalName);
	
// var (쓰지 말 것)
// var hoisting (먼저 선언하지 않아도 변수가 할당되기 때문에 콘솔에 출력 가능)
// 중괄호 안에 있어도 사용 가능 --> 이를 방지하기 위해 기존의 자바 같은 변수 let이 생김

// 3. constants
// 메모리에 값 할당하고 나면 변경 불가 : 보안성, 스레드 안전성, 인간의 실수 방지
const daysInWeek = 7;

// 4. Variable types
// primitive, single item (단일 데이터 유형) : number, string, boolean, null, undefined, symbol
// object : box container, 단일 아이템을 한번에 관리 가능
// function

// number : 숫자 유형과 단위에 상관없이 하나로 통일 / 무한대처럼 정해져 있는 값 있음
const a = 17;
const b = 17.1;
console.log(`value: ${a}, type: ${typeof a}`);
console.log(`value: ${b}, type: ${typeof b}`);

const infi = 1 / 0 ;
const negaInfi = -1 / 0 ;
const nAn = 'string' / 2 ;
console.log(infi); // --> Infinity
console.log(negaInfi); // --> -Infinity
console.log(nAn); // --> NaN (숫자 아님)

// string : 개수 상관없이 모든 문자
const char = "c";
const ash = "ash";
const greeting = "hello "+ash;
const hi = `hi ${ash}!`; // <-- 콘솔로그 안에서 따옴표와 +로 묶지 않고 이렇게 쓸 수도 있음
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(`value: ${hi}, type: ${typeof hi}`);

// symbol : 고유 식별자. 같은 데이터라도 우선순위를 주고 싶을 때 씀.
const symbol01 = Symbol("id");
const symbol02 = Symbol("id");
console.log(symbol01 === symbol02); // false

const symbol011 = Symbol.for("id"); // 같은 값으로 만들고 싶을 때 .for
const symbol022 = Symbol.for("id");
console.log(symbol011 === symbol022); // true

console.log(`value: ${symbol01.description}, type: ${typeof symbol01.description}`); // 콘솔 출력할 때 .description

// 5. 다이나믹 타이핑 : 변수를 선언할 때 데이터타입 안 정해도 브라우저가 돌아갈 때 값에 따라 데이터타입이 정해짐
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = "7" + 5 ;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = "8" / "2" ;
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
console.log(text.charAt(0)); // 숫자라 오류남