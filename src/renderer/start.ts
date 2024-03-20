coalButton.addEventListener("click", currentCoal.click)

ShopItems.init()
CoalItem.init()
CoalItem.update()
MinerItem.init()

nextBackground()
updateLabels()

setInterval(nextBackground, 2 * 60 * 1000)
setInterval(Miner.work, 1 * 1000)
