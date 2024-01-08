"use strict";
function coalClick() {
    if (coalHealth == 0) {
        coal += coalAmount;
        coalHealth = coalHealthBar.max;
    }
    else {
        coalHealth -= currentTool.miningPower;
    }
    updateLabels();
}
function updateLabels() {
    nameLabel.innerHTML = companyName;
    coalLabel.innerHTML = coal.toString();
    coalHealthBar.value = coalHealth;
    currentTool.updateCursor();
}
coalButton.addEventListener("click", coalClick);
