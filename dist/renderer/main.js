"use strict";
const nameLabel = document.getElementById("company-name-display");
const moneyLabel = document.getElementById("money-display");
function coalClick() {
    money += coalprice;
    console.log(money);
    updateLabels();
}
function updateLabels() {
    if (nameLabel) {
        nameLabel.innerHTML = companyName;
    }
    if (moneyLabel) {
        moneyLabel.innerHTML = "Fundusze: " + money;
    }
}
