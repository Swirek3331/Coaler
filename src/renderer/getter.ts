const main = document.querySelector("main") as HTMLElement

const nameLabel = document.getElementById("company-name-display") as HTMLDialogElement
const coalLabel = document.getElementById("coal-display")  as HTMLDialogElement
const coalHealthBar = document.querySelector("progress") as HTMLProgressElement

const zombek = document.getElementById("zombek") as HTMLImageElement

const settingsDialog = document.querySelector("dialog#settings-dialog") as HTMLDialogElement
const saveSettingsButton = settingsDialog.querySelector("button#save-settings") as HTMLButtonElement
const closeSettingsButton = settingsDialog.querySelector("button#close-settings") as HTMLButtonElement
const exitGameButton = settingsDialog.querySelector("button#exit-game") as HTMLButtonElement

const menu = document.querySelector("nav#menu") as HTMLElement
const shopButton = menu.querySelector("li#shop-button") as HTMLElement
