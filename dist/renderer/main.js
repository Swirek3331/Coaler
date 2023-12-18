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
function quitMenuShow() {
    if (main) {
        for (let i = 0; i < main.children.length; i++) {
            main.children[i].classList.add("hidden");
        }
    }
}
