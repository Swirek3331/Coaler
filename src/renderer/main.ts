const nameLabel = document.getElementById("company-name-display")
const moneyLabel = document.getElementById("money-display")

function coalClick() :void
{
    money += coalprice;

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
}

function menuShow() :void
{

}
