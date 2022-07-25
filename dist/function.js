"use strict";
function add2(num1, num2) {
    return num1 + num2;
}
console.log(add2(1, 2));
function hello(name) {
    return "Hello " + (name || "world");
}
function hello2(name) {
    if (name === void 0) { name = "string"; }
    return "Hello " + (name || "world");
}
console.log(hello());
console.log(hello2());
function hello3(name, age) {
    return "hello " + name + ", your age is " + age;
}
function hello4(age, name) {
    if (age !== undefined) {
        return "hello " + name + ", your age is " + age;
    }
    else {
        return "hello " + name;
    }
}
console.log(hello4(undefined, "hyeonjun"));
console.log(hello4(5, "hyeonjun"));
function add3() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log(nums);
    return nums.reduce(function (result, num) {
        return (result += num);
    });
}
console.log(add3(1, 2, 3, 4, 5, 6));
var sam = {
    name: "Sam"
};
function callName(age) {
    return this.name + "'s age is " + age;
}
var call = callName.bind(sam);
console.log(call(3));
function join(name, age) {
    if (typeof age !== "number") {
        console.log(name);
        return "나이는 숫자로 입력해주세요";
    }
    else {
        console.log(name, age);
        return name + ", " + age;
    }
}
var jane = join("jane", 30);
var annie = join("me", "30");
//# sourceMappingURL=function.js.map