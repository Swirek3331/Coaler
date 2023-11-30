"use strict";
let coal = 0;
let money = 0;
let companyName = "Coal Inc.";
const nameLabel = document.getElementById("company-name-display");
const coalLabel = document.getElementById("coal-display");
const moneyLabel = document.getElementById("money-label");
function coalClick() {
    coal++;
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
