updateLabels()

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