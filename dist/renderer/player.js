"use strict";
let coal = 0;
let money = 0;
let coalprice = 10;
let companyName = "Coal Inc.";
const nameLabel = document.getElementById("company-name-display");
const coalLabel = document.getElementById("coal-display");
const moneyLabel = document.getElementById("money-display");
function coalClick() {
    coal++;
    updateLabels();
}
function coalSell() {
    if (coal > 0) {
        money += coal * coalprice;
        coal = 0;
    }
    updateLabels();
}
function updateLabels() {
    if (nameLabel) {
        nameLabel.innerHTML = companyName;
    }
    if (coalLabel) {
        coalLabel.innerHTML = "Węgiel: " + coal;
    }
    if (moneyLabel) {
        moneyLabel.innerHTML = "Fundusze: " + money;
    }
}
