function coalClick() :void
{
    if (currentCoal.health == 0)
    {
        currentCoal.amount += coalAmount;
        currentCoal.health = coalHealthBar.max
        currentCoal = Coal.nextCoal(currentCoal)
    }
    else
    {
        if (currentCoal.health - currentTool.miningPower < 0)
        {
            currentCoal.health = 0
        }
        else
        {
            currentCoal.health -= currentTool.miningPower
        }
    }
    
    updateLabels()
}

function updateLabels() :void
{
    coalButton.src = `../${currentCoal.scalledPath}`;
    nameLabel.innerHTML = companyName;
    coalHealthBar.value = currentCoal.health;
    currentTool.updateCursor()

    for (let coal of Coal.coals)
    {
        coal.amountLabel.innerHTML = coal.amount.toString();
    }
}

coalButton.addEventListener("click", coalClick)