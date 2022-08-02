// Interface: 객체에 속한 속성들의 타입을 지정해줄 때 사용.
// TS에서는 객체에 속할 속성과 그것의 타입이 Interface나 type으로 미리 설정되어 있지 않으면, 속성(property)에 접근할 수 없다.

type Score = "A" | "B" | "C" | "D"; // Score라는 문자열 리터럴 타입. 객체에 특정한 값 이외에는 받지 않을 때 사용
interface User {
  name: string;
  age: number;
  gender?: string; // Optional property (있어도 되고, 없어도 되는 속성)
  readonly birthYear: number; // 객체 선언 시 최초에 할당만 가능하고 그 이후에 수정 불가능한 속성
  [grade: number]: Score; // number 타입의 키를 키를 여러개 받을 수 있고, 값은  string 타입만 가능한 속성
  // 객체 속성에 들어갈 값의 type은 Score라는 문자열 리터럴로 정의됨. Score 타입에 정해진 값이 아니면 TypeError 발생
}

let user: User = {
  name: "hyeonjun",
  age: 21,
  birthYear: 2022,
  1: "A",
  2: "B"
};

console.log(user.name);

// Interface로 함수의 매개변수, 반환값의 타입 정의

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (num1, num2) {
  return num1 + num2;
};

add(10, 2);

interface Isadult {
  (age: number): boolean;
}

const isAdult: Isadult = (age) => {
  return age > 19;
};

//  Interface로 클래스 정의

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

// implements(상속)
class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go");
  }
}
const bmw = new Bmw("red");

bmw.start();

// extends를 이용한 interface 확장 => 상속 + 클래스 속성의 확장 (여러개도 확장 가능)
interface ToyCar extends Car, Toy {
  price: number;
}

const lego: ToyCar = {
  color: "red",
  wheels: 4,
  start() {
    console.log("lego go");
  },
  name: "woodi",
  price: 5000
};
