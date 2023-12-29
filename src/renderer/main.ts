const nameLabel = document.getElementById("company-name-display") as HTMLDialogElement
const coalLabel = document.getElementById("coal-display")  as HTMLDialogElement

const settingsDialog = document.querySelector("dialog#settings-dialog") as HTMLDialogElement
const coalHealthBar = document.querySelector("progress") as HTMLProgressElement
const main = document.querySelector("main") as HTMLElement

function coalClick() :void
{
    if (coalHealth == 0)
    {
        coal += coalAmount
        coalHealth = coalHealthBar.max
    }
    else
    {
        coalHealth -= 1;
    }
    updateLabels()
}

function updateLabels() :void
{
    nameLabel.innerHTML = companyName;
    coalLabel.innerHTML = coal.toString()
    coalHealthBar.value = coalHealth;
}
