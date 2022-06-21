declare type Score = 'A' | 'B' | 'C' | 'D';
interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
}
declare let user: User;
interface Add {
    (num1: number, num2: number): number;
}
declare const add: Add;
interface Isadult {
    (age: number): boolean;
}
declare const isAdult: Isadult;
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
declare class Bmw implements Car {
    color: string;
    wheels: number;
    constructor(c: string);
    start(): void;
}
declare const bmw: Bmw;
interface ToyCar extends Car, Toy {
    price: number;
}
declare const lego: ToyCar;
