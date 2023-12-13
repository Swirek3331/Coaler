let coal: number = 0;
let money: number = 0;
let coalprice: number = 10;
let companyName: string = "Coal Inc.";

const nameLabel = document.getElementById("company-name-display")
const coalLabel = document.getElementById("coal-display")
const moneyLabel = document.getElementById("money-display")

function coalClick() :void
{
    coal++;

    updateLabels();
}

function coalSell() :void
{
    if (coal > 0)
    {
        money += coal * coalprice;
        coal = 0;
    }

    updateLabels();
}

function updateLabels() :void
{
    if (nameLabel)
    {
        nameLabel.innerHTML = companyName;
    }
    if (coalLabel)
    {
        coalLabel.innerHTML = "Węgiel: " + coal;
    }
    if (moneyLabel)
    {
        moneyLabel.innerHTML = "Fundusze: " + money;
    }
}
