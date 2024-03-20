const sellFunds = document.createElement("h2")
const sellCoals = document.createElement("h2")
const sellNewFunds = document.createElement("h2")
const sellButton = document.createElement("button")

Menu.sellMenu.controlsContainer.style.display = "block";

Menu.sellMenu.controlsContainer.appendChild(sellFunds)
Menu.sellMenu.controlsContainer.appendChild(sellCoals)
Menu.sellMenu.controlsContainer.appendChild(sellNewFunds)
Menu.sellMenu.controlsContainer.appendChild(sellButton)

sellButton.addEventListener("click", Coal.sellAll)

function updateLabels() :void
{
    coalButton.src = currentCoal.scalledPath;
    nameLabel.innerHTML = companyName;
    moneyLabel.innerHTML = money.toString();
    coalHealthBar.value = currentCoal.health;
    currentTool.updateCursor()
    coalHealthBar.max = currentCoal.hardnes;

    sellFunds.innerHTML = `Obecne fundusze: ${money}$`;
    sellCoals.innerHTML = `Węgli łącznie: ${Coal.coalAmount()}`;
    sellNewFunds.innerHTML = `Fundusze po sprzedaży: ${Coal.funds()}$`;

    Coal.updateLabels()
}