function coalFinish() :void
{
    currentCoal.amount += coalAmount;
    currentCoal.health = coalHealthBar.max
    
    if (coalShow)
    {
        currentCoal = Coal.nextCoal(currentCoal)
    }

    updateLabels()
}

function updateLabels() :void
{
    coalButton.src = currentCoal.scalledPath;
    nameLabel.innerHTML = companyName;
    coalHealthBar.value = currentCoal.health;
    currentTool.updateCursor()
    coalHealthBar.max = currentCoal.hardnes;

    Coal.updateLabels()
}