updateLabels()

const main = document.querySelector("main")

function next(max: number) :number
{
    return Math.random() * max;
}

function next2(min: number, max: number) :number
{
    return Math.random() * (min - max) + min;
}