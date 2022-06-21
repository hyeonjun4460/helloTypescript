"use strict";
var array1 = [];
var array2 = [];
function evaluate(expression) {
    var alpha = expression.split(' ').map(function (item) {
        if (item.indexOf('sin') !== -1) {
            item.replace('sin', 'Math.sin');
        }
        if (item.indexOf('cos') !== -1) {
            console.log(item);
            item.replace('cos', 'Math.cos');
        }
        if (Number(item)) {
            array1.push(Number(item));
        }
    });
    console.log(alpha);
}
evaluate('sin(cos(1)) * cos(1)');
//# sourceMappingURL=test.js.map