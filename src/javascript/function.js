// 함수
// 함수는 동사형으로 작명, 한 가지 함수는 한 가지 일만 하도록 만들기

// 콜백 함수
function randomQuiz(answer, printYes, printNo){
	if(answer === 'a'){
		printYes();
	} else {
		printNo();
	}
}

const printYes = function (){ //익명 함수
	console.log("yes");
}

const printNo = function (){
	console.log("no");
}

randomQuiz("wrong", printYes, printNo);
randomQuiz("a", printYes, printNo);

// arrow function
const print01 = function (){
	console.log("yes");
}

const print02 = () => console.log("arrow");
const add = (a, b) => a+b;

// IIFE 죽각 호출 함수 표현
(function hello() {
	console.log("IIFE");
})();