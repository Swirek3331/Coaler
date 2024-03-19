coalButton.addEventListener("click", currentCoal.click)

ShopItems.init()
CoalItem.init()
MinerItem.init()

nextBackground()
updateLabels()

setInterval(nextBackground, 10 * 1000)
setInterval(Miner.work, 2 * 1000)

