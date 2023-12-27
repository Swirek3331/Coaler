"use strict";
const nameLabel = document.getElementById("company-name-display");
const moneyLabel = document.getElementById("money-display");
const settingsDialog = document.querySelector("dialog");
const coalHealthBar = document.querySelector("progress");
function coalClick() {
    if (coalHealthBar) {
        if (coalHealth > 0) {
            coalHealth -= 1;
            money += coalprice / 10;
        }
        else {
            money += coalprice;
            coalHealth = coalHealthBar.max;
        }
    }
    updateLabels();
}
function updateLabels() {
    if (nameLabel) {
        nameLabel.innerHTML = companyName;
    }
    if (moneyLabel) {
        moneyLabel.innerHTML = money.toString();
    }
    if (coalHealthBar) {
        coalHealthBar.value = coalHealth;
    }
}
function menuShow() {
    if (settingsDialog) {
        settingsDialog.showModal();
    }
}
