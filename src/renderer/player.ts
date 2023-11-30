let coal: number = 0;
let money: number = 0;
let companyName: string = "Coal Inc.";

const nameLabel = document.getElementById("company-name-display")
const coalLabel = document.getElementById("coal-display")
const moneyLabel = document.getElementById("money-label")

function coalClick() :void
{
    coal++;

    updateLabels();
}