"use strict";
function coalClick() {
    if (currentCoal.health == 0) {
        coalFinish();
    }
    else {
        if (currentCoal.health - currentTool.miningPower < 0) {
            coalFinish();
        }
        else {
            currentCoal.health -= currentTool.miningPower;
        }
    }
    updateLabels();
}
function coalFinish() {
    currentCoal.amount += coalAmount;
    currentCoal.health = coalHealthBar.max;
    currentCoal = Coal.nextCoal(currentCoal);
    updateLabels();
}
function updateLabels() {
    coalButton.src = `../${currentCoal.scalledPath}`;
    nameLabel.innerHTML = companyName;
    coalHealthBar.value = currentCoal.health;
    currentTool.updateCursor();
    coalHealthBar.max = currentCoal.hardnes;
    for (let coal of Coal.coals) {
        coal.amountLabel.innerHTML = coal.amount.toString();
    }
}
coalButton.addEventListener("click", coalClick);
