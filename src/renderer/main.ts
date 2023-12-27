const nameLabel = document.getElementById("company-name-display")
const moneyLabel = document.getElementById("money-display")

const settingsDialog = document.querySelector("dialog")
const coalHealthBar = document.querySelector("progress")

function coalClick() :void
{
    if (coalHealthBar)
    {
        if (coalHealth > 0)
        {
            coalHealth -= 1;
            money += coalprice / 10;
        }
        else
        {
            money += coalprice;
            coalHealth = coalHealthBar.max;
        }
    }

    updateLabels()
}

function updateLabels() :void
{
    if (nameLabel)
    {
        nameLabel.innerHTML = companyName;
    }
    if (moneyLabel)
    {
        moneyLabel.innerHTML = money.toString()
    }
    if (coalHealthBar)
    {
        coalHealthBar.value = coalHealth;
    }
}

function menuShow() :void
{
    if (settingsDialog)
    {
        settingsDialog.showModal()
    }
}
