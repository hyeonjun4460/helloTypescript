"use strict";
function evaluate(expression) {
    var alpha = expression.split(' ').map(function (item) {
        if (item.indexOf('sin') !== -1) {
            item = item.replace('sin', 'Math.sin');
        }
        if (item.indexOf('cos') !== -1) {
            item = item.replace('cos', 'Math.cos');
        }
        return item;
    });
    var origin = alpha.join('');
    console.log(origin);
    console.log(new Function('return ' + origin)());
    return new Function('return ' + origin)();
}
evaluate('1 + 2 * 3');
evaluate('(1 + 2) * 3');
evaluate('1 / 32.5 + 167 * (3498 - 1155) * -721 * (4885 - 1) / 0.5');
evaluate('sin(cos(1)) * cos(1)');
//# sourceMappingURL=test.js.map