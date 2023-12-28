"use strict";
const nameLabel = document.getElementById("company-name-display");
const coalLabel = document.getElementById("coal-display");
const settingsDialog = document.querySelector("dialog#settings-dialog");
const coalHealthBar = document.querySelector("progress");
function coalClick() {
    if (coalHealth == 0) {
        coal += coalAmount;
        coalHealth = coalHealthBar.max;
    }
    coalHealth -= 1;
    updateLabels();
}
function updateLabels() {
    nameLabel.innerHTML = companyName;
    coalLabel.innerHTML = coal.toString();
    coalHealthBar.value = coalHealth;
}
