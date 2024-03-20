class Miner
{
    static miners: Miner[] = new Array<Miner>();

    name: string;
    title: string;
    path: string;
    scalledPath: string;

    price: number;
    amount: number;
    power: number;

    constructor(name: string, title: string = name, power = 1)
    {


        this.name = name
        this.title = title
        this.path = `../assets/sprites/miners/normal/${name}.png`;
        this.scalledPath = `../assets/sprites/miners/scalled/${name}.png`;
        this.price = power * 10
        this.amount = 0
        this.power = power

        Miner.miners.push(this)
    }

    public work()
    {
        if (this.amount == 0)
        {
            return
        }

        if (currentCoal.health == 0)
        {
            coalFinish()
        }
        else
        {
            if (currentCoal.health - this.power * this.amount < 0)
            {
                coalFinish()
            }
            else
            {
                currentCoal.health -= this.power * this.amount
            }
        }
        
        updateLabels()
    }

    public static work()
    {
        for (const miner of Miner.miners)
        {
            miner.work()
        }
    }

    public static mrMiner = new Miner("mr-miner", "Mr. Miner")
    public static elegant = new Miner("elegant", "Elegancik", 5)
    public static excavator = new Miner("excavator", "Koparka", 10)
}

class MinerItem
{
    miner: Miner

    constructor(miner: Miner)
    {
        let title = document.createElement("h3")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let priceTag = document.createElement("p")

        Menu.productionMenu.controlsContainer.appendChild(div)
        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(priceTag)
        div.classList.add("item", "miner-item")
        div.addEventListener("click", this.buy.bind(this))

        img.src = miner.scalledPath
        title.innerHTML = miner.title
        priceTag.innerHTML = `${miner.price} $`;

        this.miner = miner
    }

    public buy()
    {
        if (money < this.miner.price)
        {
            return
        }

        money -= this.miner.price
        this.miner.amount++

        updateLabels()
    }

    public static init()
    {
        for (const miner of Miner.miners)
        {
            new MinerItem(miner)
        }
    }
}