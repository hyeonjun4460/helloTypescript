// 함수 타입 설정 기본
//  return은 필수, return이 없다면 void로 타입 설정해야함.
function add2(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add2(1, 2));

// Optional paramater
// ts에서 매개변수는 필수
// 매개변수를 선택적인 경우로 옵션을 주려면 매개변수? 로 설정
function hello(name?: string) {
  return `Hello ${name || "world"}`;
}

function hello2(name = "string") {
  return `Hello ${name || "world"}`;
}
console.log(hello());
console.log(hello2());

// 선택적 매개변수는 항상 필수 매개변수 뒤에 위치해야함.
function hello3(name: string, age?: number): string {
  return `hello ${name}, your age is ${age}`;
}

// 선택적 매개변수를 필수 매개변수 앞에 선언하고 싶으면 아래 처럼 작성할 수는 있음.
function hello4(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `hello ${name}, your age is ${age}`;
  } else {
    return `hello ${name}`;
  }
}
console.log(hello4(undefined, "hyeonjun"));
console.log(hello4(5, "hyeonjun"));

// 나머지 매개변수
// 매개변수의 개수에 가변성을 주고자 할 때 사용
// 나머지 매개변수 활용 시, 전달받은 매개변수를 배열로 나타냄. 즉, 타입도 배열로 나타내야함.

function add3(...nums: number[]) {
  console.log(nums);
  return nums.reduce((result, num) => {
    return (result += num);
  });
}
console.log(add3(1, 2, 3, 4, 5, 6));

// 함수에서 this의 활용: this로 활용될 매개변수의 인터페이스를 설정하면 됨
interface User2 {
  name: string;
}

const sam: User2 = {
  name: "Sam"
};

function callName(this: User2, age: number) {
  return `${this.name}'s age is ${age}`;
}

const call = callName.bind(sam);
console.log(call(3));

// 오버로드
// 전달받은 매개배수의 개수나 타입에 따라 다른 동작을 하게 하는 것
// 코드 재사용성, 가독성 높이기 위해 많이 사용

interface User3 {
  name: string;
  age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User3;
function join(name: string, age: number | string): User3 | string {
  if (typeof age !== "number") {
    console.log(name);
    return "나이는 숫자로 입력해주세요";
  } else {
    console.log(name, age);
    return `${name}, ${age}`;
  }
}

const jane: User3 = join("jane", 30);
const annie: string = join("me", "30");
