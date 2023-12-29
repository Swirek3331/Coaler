//tymaczasowe
let shopOpen = false
shopButton.addEventListener("click", () => {
    const div = main.querySelector("div") as HTMLDivElement

    if (!shopOpen)
    {
        div.style.backgroundImage = "url(../assets/sprites/ui/sklep-full-scalled.png)";
        shopOpen = true
    }
    else
    {
        div.style.backgroundImage = "none";
        shopOpen = false
    }
})