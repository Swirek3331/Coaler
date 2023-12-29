"use strict";
function showSettingsDialog() {
    settingsDialog.show();
    const nameInput = document.getElementById("name-input");
    nameInput.placeholder = companyName;
}
function saveSettings() {
    const nameInput = document.getElementById("name-input");
    companyName = nameInput.value;
    updateLabels();
}
//tymaczasowe
let shopOpen = false;
function showShop() {
    const div = main.querySelector("div");
    if (!shopOpen) {
        div.style.backgroundImage = "url(../assets/sprites/ui/sklep-full-scalled.png)";
        shopOpen = true;
    }
    else {
        div.style.backgroundImage = "none";
        shopOpen = false;
    }
}
