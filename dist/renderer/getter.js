"use strict";
const body = document.body;
const main = document.querySelector("main");
const coalButton = document.getElementById("coal-button");
const nameLabel = document.getElementById("company-name-display");
const coalLabel = document.getElementById("coal-display"); //co to jest?
const coalHealthBar = document.querySelector("progress");
const moneyLabel = document.getElementById("money-label");
const moneyHeading = document.getElementById("money-heading");
const zombek = document.getElementById("zombek");
const copyright = document.getElementById("copyright");
const settingsDialog = document.querySelector("dialog#settings-dialog");
const saveSettingsButton = settingsDialog.querySelector("button#save-settings");
const closeSettingsButton = settingsDialog.querySelector("button#close-settings");
const exitGameButton = settingsDialog.querySelector("button#exit-game");
const authorDialog = document.querySelector("dialog#author-dialog");
const greyDiv = document.querySelector("div#grey-div");
const coalList = document.querySelector("ul#coal-list");
