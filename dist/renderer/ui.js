"use strict";
function coalClick() {
    if (coalHealth == 0) {
        coal += coalAmount;
        coalHealth = coalHealthBar.max;
    }
    else {
        coalHealth -= 1;
    }
    updateLabels();
}
function updateLabels() {
    nameLabel.innerHTML = companyName;
    coalLabel.innerHTML = coal.toString();
    coalHealthBar.value = coalHealth;
}
