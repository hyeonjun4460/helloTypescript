"use strict";
var user = {
    name: "hyeonjun",
    age: 21,
    birthYear: 2022,
    1: "A",
    2: "B"
};
console.log(user.name);
var add = function (num1, num2) {
    return num1 + num2;
};
add(10, 2);
var isAdult = function (age) {
    return age > 19;
};
var Bmw = (function () {
    function Bmw(c) {
        this.wheels = 4;
        this.color = c;
    }
    Bmw.prototype.start = function () {
        console.log("go");
    };
    return Bmw;
}());
var bmw = new Bmw("red");
bmw.start();
var lego = {
    color: "red",
    wheels: 4,
    start: function () {
        console.log("lego go");
    },
    name: "woodi",
    price: 5000
};
//# sourceMappingURL=interface.js.map