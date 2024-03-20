function updateLabels() :void
{
    coalButton.src = currentCoal.scalledPath;
    nameLabel.innerHTML = companyName;
    moneyLabel.innerHTML = money.toString();
    coalHealthBar.value = currentCoal.health;
    currentTool.updateCursor()
    coalHealthBar.max = currentCoal.hardnes;

    Coal.updateLabels()
}

const sellButton = document.createElement("button")//to może nie jest etyczne
Menu.shopMenu.shoperContainer.appendChild(sellButton)
sellButton.innerHTML = "Sprzedaj wszystko";
sellButton.style.marginTop = "316px";
sellButton.addEventListener("click", Coal.sellAll)