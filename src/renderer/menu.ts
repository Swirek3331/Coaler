function showSettingsDialog() : void
{
    settingsDialog.show()

    const nameInput = document.getElementById("name-input") as HTMLInputElement
    nameInput.placeholder = companyName
}

function saveSettings() : void
{
    const nameInput = document.getElementById("name-input") as HTMLInputElement
    companyName = nameInput.value
    updateLabels()
}

function showShop() :void
{
    
}