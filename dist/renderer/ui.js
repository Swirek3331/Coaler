"use strict";
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
    Coal.updateLabels();
}
coalButton.addEventListener("click", currentCoal.click);
