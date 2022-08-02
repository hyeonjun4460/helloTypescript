// Generic : <T>
// 클래스, 인터페이스, 함수에서 다양한 타입을 활용할 시, 코드 재사용 측면에서 많이 활용되는 타입
// T: Typeparameter로 제네릭 타입은 이 T로 전달된 타입을 활용하도록 하는 매개변수라고 할 수 있다.
// 함수오버로드, 유니온타입보다 더 코드 재사용성을 도모할 수 있음.

// 1) function에서 활용
function getSize<T>(arr: T[]): number {
  console.log(arr);
  return arr.length;
}
const arr1 = [1, 2, 3];
const arr2 = ["1", "2", "3"];

getSize<number | string>(arr1);
// arr1이 대입되는 getSize는 number 타입을 받게 된다.
getSize(arr2);

// 2) interface에서의 활용
interface phone<T> {
  name: string;
  price: number;
  option: T;
}

const m1: phone<object> = {
  name: "s1",
  price: 1000,
  option: {
    color: "red",
    coupon: false
  }
};

const m2: phone<string> = {
  name: "s2",
  price: 2000,
  option: "red"
};

interface book {
  price: number;
}

interface clue {
  name: string;
}

interface think {
  name: string;
}

const book: book = {
  price: 1000
};

const clue: clue = {
  name: "clue"
};

const think: think = {
  name: "think"
};

// 3) 함수에서 객체 형태 매개변수의 제네릭 타입 활용
// function showNamePlz<T>(data: T): string {
//   return data.name; // 단순히 T만 작성하면, 모든 data라는 매개변수에 name이 있는지, 그것의 타입이 T인지 확신할 수 없어서 에러가 뜰 수 있음.
// }

function showNamePlz<T extends { name: string }>(data: T): string {
  return data.name; // T라는 타입 파라메터는 {name:string}에 기반한다는 점을 알려줘서, name:string을 가지지 않는 매개변수에 대해 에러를 낼 수 있도록 조정.
}

// showNamePlz(book);
showNamePlz(clue);
showNamePlz(think);
