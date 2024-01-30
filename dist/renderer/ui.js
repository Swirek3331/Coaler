"use strict";
function coalClick() {
    if (currentCoal.health == 0) {
        currentCoal.amount += coalAmount;
        currentCoal.health = coalHealthBar.max;
    }
    else {
        currentCoal.health -= currentTool.miningPower;
    }
    updateLabels();
}
function updateLabels() {
    coalButton.src = `../${currentCoal.scalledPath}`;
    nameLabel.innerHTML = companyName;
    currentCoal.amountLabel.innerHTML = currentCoal.amount.toString();
    coalHealthBar.value = currentCoal.health;
    currentTool.updateCursor();
}
coalButton.addEventListener("click", coalClick);
