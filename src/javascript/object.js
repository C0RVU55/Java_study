// 오브젝트

const name = 'ellie';
const age = 4;

const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

function print(person){
	console.log(person.name);
	console.log(person.age);
}

const ellie = {name: 'eille', age: 4};
print(ellie);

// 동적 언어라 후에 키값을 추가하거나 삭제할 수 있음
ellie.hasJob = true;
console.log(ellie.hasJob);

// 다른 접근 방법
console.log(ellie.name);
console.log(ellie['name']); // 실시간으로 원하는 값을 받아오고 싶을 때 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
	console.log(obj.key); // 이때는 key에 값이 있는지부터 따지기 때문에 undefined
	console.log(obj['key']); // key 바로 받아옴
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 키값 이름이 같으면 하나만 써도 됨
const person4 = new Person('aaa', 2);

function Person(name, age){ // 오브젝트 만드는 함수는 생성자 만드는 것처럼 생김
	this.name = name;
	this.age = age;
}

// in 오브젝트 안 키값 찾기
console.log('name' in ellie);
console.log('random' in ellie);

// for...in vs for...of
console.clear();

for (key in ellie) {
	console.log(key);
}

// of는 배열처럼 순차적인 데이터를 모두 찍음
const array = [1, 2, 3, 5];
for(value of array) {
	console.log(value);
}

// 복제
const user = {name: 'eille', age: '20'};
const user2 = user; // 다른 ref지만 같은 데이터를 가리키고 있음.
user2.name = 'coder';
console.log(user); // 엘리가 코더로 바뀌어 있음. 

// 예전에는 빈 오브젝트를 만들어 놓고 for문으로 값 넣는 식으로 돌렸음
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}
console.log(user3);

//근데 위처럼 안 해도 되고 assign 쓰면 됨
const user4 = Object.assign({}, user); // 넣은 대로 리턴해줌
console.log(user4);

const fr1 = {color: 'red'};
const fr2 = {color: 'blue', size: 'big'};
const mix = Object.assign({}, fr1, fr2);
console.log(mix.color); // 뒤에 있는 오브젝트가 계속 덮어써서 색은 파랑이 나옴
console.log(mix.size);