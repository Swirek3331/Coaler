"use strict";
updateLabels();
const main = document.querySelector("main");
function next(max) {
    return Math.random() * max;
}
function next2(min, max) {
    return Math.random() * (min - max) + min;
}
