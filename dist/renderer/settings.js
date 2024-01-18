"use strict";
zombek.addEventListener("click", () => {
    settingsDialog.showModal();
    const nameInput = document.getElementById("name-input");
    nameInput.placeholder = companyName;
});
saveSettingsButton.addEventListener("click", () => {
    const nameInput = document.getElementById("name-input");
    companyName = nameInput.value;
    updateLabels();
});
closeSettingsButton.addEventListener("click", () => {
    settingsDialog.close();
});
exitGameButton.addEventListener("click", () => window.close());
copyright.addEventListener("click", () => {
    authorDialog.showModal();
});
