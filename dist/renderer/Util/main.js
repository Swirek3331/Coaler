"use strict";
function next(arr, current) {
    if (typeof current == "number") {
        if (current >= arr.length - 1)
            return arr[0];
        else
            return arr[current + 1];
    }
    else {
        if (current == arr[arr.length - 1])
            return arr[0];
        else
            return arr[arr.indexOf(current) + 1];
    }
}
function linearGrowth(x) {
    return 3 * x + 1;
}
function sigma(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function quadtraticGrowth(x) {
    return x * (x + 1) / 2;
}
