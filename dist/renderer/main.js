"use strict";
const nameLabel = document.getElementById("company-name-display");
const coalLabel = document.getElementById("coal-display");
const settingsDialog = document.querySelector("dialog");
const coalHealthBar = document.querySelector("progress");
function coalClick() {
    if (coalHealthBar) {
        if (coalHealth == 0) {
            coal += coalprice;
            coalHealth = coalHealthBar.max;
        }
        coalHealth -= 1;
        updateLabels();
    }
}
function updateLabels() {
    if (nameLabel) {
        nameLabel.innerHTML = companyName;
    }
    if (coalLabel) {
        coalLabel.innerHTML = coal.toString();
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
