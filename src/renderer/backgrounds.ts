const backgroundKey = "bg_middle0";
const backgroundAmount = 5
let currentBackground = 0

function nextBackground()
{
    let next = randomInt(1, backgroundAmount)

    while (next == currentBackground)
    {
        next = randomInt(1, backgroundAmount)
    }

    currentBackground = next
    body.style.backgroundImage = `url(../assets/sprites/backgrounds/scalled/${backgroundKey}${currentBackground}.png)`
}