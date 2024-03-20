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
        
        let damage = this.power * this.amount;
        
        while (damage > 0)
        {
            if (currentCoal.health <= 0)
            {
                Coal.finish()
            }
            else
            {
                const remainingHealth = currentCoal.health - damage;
        
                if (remainingHealth < 0)
                {
                    Coal.finish();
                    damage = Math.abs(remainingHealth);
                }
                else
                {
                    currentCoal.health -= damage;
                    damage = 0;
                }
            }
            
            updateLabels();
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
    amountTag: HTMLParagraphElement

    constructor(miner: Miner)
    {
        let title = document.createElement("h3")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let amounTag = document.createElement("p")
        let powerTag = document.createElement("p")
        let priceTag = document.createElement("p")

        if (Menu.productionMenu.controls.length == 0 || Menu.productionMenu.controls.length % 3 == 0)
        {
            let flexDiv = document.createElement("div")
            Menu.productionMenu.controlsContainer.appendChild(flexDiv)
            flexDiv.classList.add("flex")
            flexDiv.style.width = "100%";
            flexDiv.style.height = "33.33%";
            flexDiv.appendChild(div)
        }
        else
        {
            let flexDiv = Menu.productionMenu.controlsContainer.lastElementChild as HTMLDivElement
            flexDiv.appendChild(div)
        }

        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(amounTag)
        div.appendChild(powerTag)
        div.appendChild(priceTag)
        div.classList.add("item", "miner-item")
        div.addEventListener("click", this.buy.bind(this))

        img.src = miner.scalledPath
        title.innerHTML = miner.title
        amounTag.innerHTML = `Ilość: ${miner.amount}`;
        powerTag.innerHTML = `Moc: ${miner.power}`;
        priceTag.innerHTML = `Cena: ${miner.price} $`;

        this.miner = miner
        this.amountTag = amounTag

        Menu.productionMenu.controls.push(this)
    }

    public buy()
    {
        if (money < this.miner.price)
        {
            return
        }

        money -= this.miner.price
        this.miner.amount++
        this.amountTag.innerHTML = `Ilość: ${this.miner.amount}`;


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