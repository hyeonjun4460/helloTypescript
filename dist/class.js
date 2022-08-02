"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car11 = (function () {
    function Car11(color) {
        this.color = color;
    }
    Car11.prototype.start = function () {
        console.log("car");
    };
    return Car11;
}());
var bmw2 = new Car11("red");
var team = (function () {
    function team(team) {
        this.boss = "보스";
        this.manager = "현준22";
        this.foundationDay = 1900;
        this.name = team;
    }
    team.prototype.do = function () {
        console.log(this.boss);
        console.log(team.memberNum);
    };
    team.memberNum = 5;
    return team;
}());
var baseball = (function (_super) {
    __extends(baseball, _super);
    function baseball(team) {
        return _super.call(this, team) || this;
    }
    baseball.prototype.baseball = function () {
        console.log(this.manager);
        console.log(this.manager);
    };
    return baseball;
}(team));
var eagles = new team("aa");
var tigers = new baseball("bb");
console.log(eagles.name);
eagles.name = "돼지쓰";
console.log(eagles.name);
eagles.do();
console.log(tigers.baseball());
var soccerTeam = (function () {
    function soccerTeam(name, num) {
        this.teamName = name;
        this.memberNum = num;
    }
    soccerTeam.prototype.start = function () {
        console.log("soccer team");
    };
    return soccerTeam;
}());
var mu = (function (_super) {
    __extends(mu, _super);
    function mu(name, num) {
        return _super.call(this, name, num) || this;
    }
    mu.prototype.do = function () {
        console.log(this.memberNum);
    };
    return mu;
}(soccerTeam));
var MU = new mu("mu", 5);
console.log(MU.teamName, MU.memberNum);
MU.do();
//# sourceMappingURL=class.js.map