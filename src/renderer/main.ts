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

function quitMenuShow() :void
{
    if (main)
    {
        for (let i = 0; i < main.children.length; i++)
        {
            main.children[i].classList.add("hidden")
        }
    }
}
