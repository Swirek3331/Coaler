function cheatsAlert()
{
    console.log("This function requires cheats to be enabled");
}

function setCoalShow()
{
    coalShow = !coalShow;

    if (coalShow)
    {
        unlockAll();
    }

    updateLabels()
}

function unlockAll()
{
    if (cheatsEnabled!)
    {
        cheatsAlert()
        return
    }

    for (let coal of Coal.coals)
    {
        coal.unlock();
    }

    updateLabels()
}

function unlock(coal: Coal)
{
    if (cheatsEnabled!)
    {
        cheatsAlert()
        return
    }

    coal.unlock();
}

function enableCheats()
{
    cheatsEnabled = true;
}
