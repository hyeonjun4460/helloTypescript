"use strict";
var car = 'bmw';
var boolean = true;
var boolean2;
var a = [1, 2, 3];
var b = ['a', 'b'];
var a2 = [2, 3, 4];
var b2 = ['a', 'b'];
var c;
c = ['1', 1];
function sayHello() {
    console.log('hello');
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        console.log('hi');
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
//# sourceMappingURL=type.js.map