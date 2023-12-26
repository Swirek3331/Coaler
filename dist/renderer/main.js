"use strict";
const nameLabel = document.getElementById("company-name-display");
const moneyLabel = document.getElementById("money-display");
function coalClick() {
    money += coalprice;
    updateLabels();
}
function updateLabels() {
    if (nameLabel) {
        nameLabel.innerHTML = companyName;
    }
    if (moneyLabel) {
        moneyLabel.innerHTML = money.toString();
    }
}
function menuShow() {
}
