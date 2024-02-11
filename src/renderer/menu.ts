//tymaczasowe
const div = document.getElementById("grey-div") as HTMLDivElement
let productionOpen = false
let shopOpen = false
let emissionOpen = false
let coalsOpen = false

productionButton.addEventListener("click", () => {
    div.style.backgroundImage = "none";
    shopOpen = false
})

shopButton.addEventListener("click", () => {
    if (!shopOpen)
    {
        div.style.backgroundImage = "url(../assets/sprites/menus/sklep-full-scalled.png)";
        shopOpen = true
    }
    else
    {
        div.style.backgroundImage = "none";
        shopOpen = false
    }
})

emissionButton.addEventListener("click", () => {
    div.style.backgroundImage = "none";
    shopOpen = false
})

coalsButton.addEventListener("click", () => {
    div.style.backgroundImage = "none";
    shopOpen = false
})

const shopMenu: GreyDiv = {
    button: shopButton,
    path: "../assets/sprites/menus/sklep-full-scalled.png",
    oppened: false,
    show()
    {
        
    }
}
