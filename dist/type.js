"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car = "bmw";
var boolean = true;
var boolean2;
var a = [1, 2, 3];
var b = ["a", "b"];
var a2 = [2, 3, 4];
var b2 = ["a", "b"];
var c;
c = ["1", 1];
function sayHello() {
    console.log("hello");
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        console.log("hi");
    }
}
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
var x = null;
var y = undefined;
var userName1 = "Bob";
var userName2 = "Tom";
userName2 = 3;
var user5 = {
    name: "hi",
    job: "police"
};
console.log(user5);
function getGit(gift) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
        console.log("car");
    }
    else {
        gift.call();
        console.log("mobile");
    }
}
var race = {
    name: "car",
    color: "red",
    start: function () {
        console.log("hi");
    }
};
getGit(race);
var toyCar2 = {
    name: "타요",
    start: function () {
        console.log("장난감차");
    },
    color: "blue",
    price: 50000
};
console.log(toyCar2.start());
//# sourceMappingURL=type.js.map