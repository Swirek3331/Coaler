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

const sellButton = document.createElement("button")//to może nie jest etyczne
Menu.shopMenu.shoperContainer.appendChild(sellButton)
sellButton.innerHTML = "Sprzedaj wszystko";
sellButton.style.marginTop = "316px";