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
