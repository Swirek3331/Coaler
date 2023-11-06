"use strict";
let coal = 0;
let money = 0;
let companyName = "Coal Inc.";
let coalDisplay = document.getElementById("coal-display");
let moneyDisplay = document.getElementById("money-display");
let companyNameDisplay = document.getElementById("company-name-display");
function statsUpdate() {
    if (coalDisplay) {
        coalDisplay.innerText = "Węgiel: " + coal.toString();
    }
    if (moneyDisplay) {
        moneyDisplay.innerHTML = "Fundusze: " + money.toString();
    }
    if (companyNameDisplay) {
        companyNameDisplay.innerHTML = companyName;
    }
}
