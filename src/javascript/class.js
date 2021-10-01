'use strict';

// 클래스
class Person{
	
	//생성자
	constructor(name, age){
		//필드
		this.name = firstName;
		this.Name = lastName;
		this.age = age; // 이걸 부르면 setter 함수로 가서 age를 부름
	}
	
	get age(){
		return this._age;
	}
	
	set age(value){
		this._age = value;
	}
}

// 상속과 다양성
class Shape {
	constructor(width, height, color){
		this.width = width;
		this.height = height;
		this.color = color;
	}
	draw() {
		console.log(`drawing ${this.color} color`);
	}
	getArea() {
		return this.width * this.height;
	}
	
	//모든 클래스는 오브젝트를 상속하기 때문에 오브젝트에 있는 메소드 호출 가능
	//toString 등
}

class Rectangle extends Shape {}
class Triangle extends Shape {
	//오버라이딩하면서 안에 super.getArea(); 로 모부 메소드 호출도 가능
	getArea(){ // 다양성 --> 오버라이딩^^
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // 상속받아서 모부의 클래스에 있는 메소드를 갖다 씀
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//