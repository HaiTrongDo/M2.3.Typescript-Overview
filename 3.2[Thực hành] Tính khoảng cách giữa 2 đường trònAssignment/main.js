"use strict";
exports.__esModule = true;
var distance_between_two_circle_1 = require("./distance-between-two-circle");
function distance(circleOne, circleTwo, d) {
    var distance = Math.pow(circleOne.radius - circleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
var circle1 = new distance_between_two_circle_1["default"](9);
var circle2 = new distance_between_two_circle_1["default"](5);
console.log(distance(circle1, circle2, 24));
