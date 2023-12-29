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

//tymaczasowe
let shopOpen = false
function showShop() :void
{
    const div = main.querySelector("div") as HTMLDivElement

    if (!shopOpen)
    {
        div.style.backgroundImage = "url(../assets/sprites/ui/sklep-full-scalled.png)";
        shopOpen = true
    }
    else
    {
        div.style.backgroundImage = "none";
        shopOpen = false
    }
}
