// 1. 기본 타입

import { start } from "repl";

// 설정된 타입과 다른 타입을 변수에 할당하려고 하면 에러가 인식된다.
let car: string = "bmw"; //타입을 설정하지 않아도, 타입의 형태를 인식한다.
let boolean = true;
let boolean2: boolean;

let a: number[] = [1, 2, 3]; // 배열에 들어갈 값의 타입을 지정할 수 있다.
let b: string[] = ["a", "b"];
let a2: Array<number> = [2, 3, 4];
let b2: Array<string> = ["a", "b"];
let c: [string, number]; // 배열 각 인덱스값의 타입을 지정할 수 있다.
c = ["1", 1];

// 2. 함수: void, never

// 1) void: 함수에 특정한 반환값이 없을 때 사용하는 타입
function sayHello(): void {
  console.log("hello");
}
// 2) never: 항상 에러를 반환하는 함수, 무한순환하는 함수에 사용하는 타입
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    console.log("hi");
  }
}

// 3. enum: 서로 연관된 상수들의 집합 타입
// enum에 속한 상수에는 값을 할당할 수 있다.
// 특정 값만 입력 가능하도록 강제하고자 할 때 많이 이용된다. 특정 변수가 enum 타입으로 지정되면 enum에 포함된 상수만 이용된다.

enum Os {
  Window,
  Ios,
  Android
}

// null, undefined
let x: null = null;
let y: undefined = undefined;

// 4. Litreal type
const userName1 = "Bob"; // 문자형 리터럴 타입
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User5 {
  name: string;
  job: Job;
}

const user5: User5 = {
  name: "hi",
  job: "police"
};
console.log(user5);

// 5. Union type : | = OR
// 여러 타입들을 동시에 활용하려는 상황에서 활용 가능한 타입
// 식별 가능한 union type: interface를 union type과 활용할 시, 타입 결정의 분기점을 설정해주어야 하는데, 타입 결정의 분기점이 있는 union type을 "식별가능한 union type이라 함"
interface Mobile {
  name: "mobile"; // 식별가능한 type: mobile type
  color: string;
  call(): void;
}

interface Car5 {
  name: "car"; // 식별가능한 type: car type
  color: string;
  start(): void;
}

function getGit(gift: Car5 | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
    console.log("car");
  } else {
    gift.call();
    console.log("mobile");
  }
}

const race: Car5 = {
  name: "car",
  color: "red",
  start() {
    console.log("hi");
  }
};
getGit(race);

// 6. 교차 타입(Intersection types) = & = AND
// 여러 타입을 중복시키려고 할 때 사용
interface Car6 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar2: Toy & Car6 = {
  name: "타요",
  start() {
    console.log("장난감차");
  },
  color: "blue",
  price: 50000
};

console.log(toyCar2.start());
