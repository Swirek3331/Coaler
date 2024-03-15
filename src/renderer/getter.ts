const main = document.querySelector("main")!

const coalButton = document.getElementById("coal-button") as HTMLImageElement

const nameLabel = document.getElementById("company-name-display") as HTMLDialogElement
const coalLabel = document.getElementById("coal-display")  as HTMLDialogElement
const coalHealthBar = document.querySelector("progress")!

const zombek = document.getElementById("zombek") as HTMLImageElement
const copyright = document.getElementById("copyright") as HTMLImageElement

const settingsDialog = document.querySelector("dialog#settings-dialog") as HTMLDialogElement
const saveSettingsButton = settingsDialog.querySelector("button#save-settings") as HTMLButtonElement
const closeSettingsButton = settingsDialog.querySelector("button#close-settings") as HTMLButtonElement
const exitGameButton = settingsDialog.querySelector("button#exit-game") as HTMLButtonElement

const authorDialog = document.querySelector("dialog#author-dialog") as HTMLDialogElement as HTMLDialogElement

const greyDiv = document.querySelector("div#grey-div") as HTMLElement

const coalList = document.querySelector("ul#coal-list") as HTMLUListElement
