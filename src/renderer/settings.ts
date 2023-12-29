zombek.addEventListener("click", () => {
    settingsDialog.show()

    const nameInput = document.getElementById("name-input") as HTMLInputElement
    nameInput.placeholder = companyName
})

saveSettingsButton.addEventListener("click", () => {
    const nameInput = document.getElementById("name-input") as HTMLInputElement
    companyName = nameInput.value
    updateLabels()
})

closeSettingsButton.addEventListener("click", () => {
    settingsDialog.close()
})

exitGameButton.addEventListener("click", () => window.close())