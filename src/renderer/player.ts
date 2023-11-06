let coal: Number = 0;
let money: Number = 0;
let companyName: string = "Coal Inc.";

let coalDisplay = document.getElementById("coal-display");
let moneyDisplay = document.getElementById("money-display");
let companyNameDisplay = document.getElementById("company-name-display");

function statsUpdate() :void
{
    if (coalDisplay)
    {
        coalDisplay.innerHTML = "Węgiel: " + coal.toString();
    }
    if (moneyDisplay)
    {
        moneyDisplay.innerHTML = "Fundusze: " + money.toString();
    }
    if (companyNameDisplay)
    {
        companyNameDisplay.innerHTML = companyName;
    }    
}