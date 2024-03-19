coalButton.addEventListener("click", currentCoal.click)

ShopItems.init()
CoalItem.init()

nextBackground()
updateLabels()

setInterval(nextBackground, 10 * 1000)
