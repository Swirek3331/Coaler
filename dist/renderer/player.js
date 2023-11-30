"use strict";
let coal = 0;
let money = 0;
let companyName = "Coal Inc.";
const nameLabel = document.getElementById("company-name-display");
const coalLabel = document.getElementById("coal-display");
const moneyLabel = document.getElementById("money-label");
const coalImg = document.getElementById("coal-click");
function coalClick() {
    coal++;
    console.log(coal);
}
