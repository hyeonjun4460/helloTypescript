// 기본 유틸리티 타입
// 1. keyof: 대상 타입의 key값을 유니온 형태로 참조하는 타입
interface user {
  id: number;
  name: string;
  age: number;
}
type uk = keyof user;
const Uk: uk = "id";

// 2. partial<t>: 대상 타입의 일부만 참조하는 타입
let admin: Partial<user> = {
  id: 1,
  name: "hi"
};
// 3. required<t>: 모든 속성을 필수로 간주하게 하는 타입
let admin2: Required<user> = {
  id: 1,
  name: "hi",
  age: 5
};

// 4. readonly<t>: 할당만 가능하고 수정은 불가능하게 만드는 타입
let admin3: Readonly<user> = {
  id: 1,
  name: "hi",
  age: 5
};
// admin3.id = 2 // error

// 5. Record<K:key, T:type>: 키와 타입을 설정하는 타입
type score2 = "A" | "B" | "C";
type grade2 = 1 | 2 | 3;

const grade: Record<grade2, score2> = {
  1: "A",
  2: "B",
  3: "A"
};

function isValid(user: user) {
  const result: Record<keyof user, boolean> = {
    id: user.id > 10,
    name: user.name === "hi",
    age: user.age < 20
  };
  return result;
}

// 6. Pick<T,K> : 대상 인터페이스, 타입에서 특정 property만 사용할 때 쓰는 타입
let admin4: Pick<user, "id" | "name"> = {
  id: 5,
  name: "hi"
};
// 7. Omit<T,K>: Pick과 반대
let admin5: Omit<user, "name"> = {
  id: 5,
  age: 20
};
// 8. Exclude<T1, T2>: property를 제외하는 것이 아니라, type 그 자체를 제외시키는 타입
type t1 = string | number;
type t2 = Exclude<t1, number>;
// 9. nONnULLABLE<T>: null과 undefinded를 타입에서 제외시키는 타입
type t3 = string | null | undefined;
type t4 = NonNullable<t3>;
