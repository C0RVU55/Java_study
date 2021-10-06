'use strict';

// 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 배열 출력
// for문 돌리기, for of 쓰기, forEach api 쓰기
arr2.forEach(function(arr, index){
	console.log(arr, index);
});

// 배열에 값 추가, 삭제, 복사
// push, pop(삭제라기 보단 그 값을 내보내는 거라 값 받아오기 가능)

// 배열 앞에 추가 : unshift
// 배열 앞 삭제 : shift
// 얘네는 모든 데이터가 다 움직여야 돼서 느림

// 지정된 index의 데이터 지우기
arr2.push('22', '23', '55');
console.log(arr2);
arr2.splice(1, 1);
console.log(arr2);

arr2.splice(1, 1, '34', '234'); // index, 지우려는 개수(안 쓰면 뒤에 다 지워짐. 0쓰면 그냥 그 위치에 데이터 추가), 추가값, 추가값
console.log(arr2);

// concat으로 두 배열을 이을 수도 있음

// 검색
console.clear();
console.log(arr2);
console.log(arr2.indexOf('23')); // index 리턴. 값 없으면 -1 리턴.
console.log(arr2.includes('111')); // 참거짓 리턴

// 같은 데이터가 있을 경우 indexOf는 앞에 있는 데이터 index를, lastIndexOf는 마지막 데이터 index를 리턴