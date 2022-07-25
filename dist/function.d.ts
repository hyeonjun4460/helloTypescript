declare function add2(num1: number, num2: number): number;
declare function hello(name?: string): string;
declare function hello2(name?: string): string;
declare function hello3(name: string, age?: number): string;
declare function hello4(age: number | undefined, name: string): string;
declare function add3(...nums: number[]): number;
interface User2 {
    name: string;
}
declare const sam: User2;
declare function callName(this: User2, age: number): string;
declare const call: (age: number) => string;
interface User3 {
    name: string;
    age: number;
}
declare function join(name: string, age: string): string;
declare function join(name: string, age: number): User3;
declare const jane: User3;
declare const annie: string;
