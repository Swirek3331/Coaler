class Coal 
{
    public static coals: Coal[] = new Array<Coal>();

    readonly path: string;
    readonly scalledPath: string;
    readonly smallerPath: string;
    title: string

    readonly baseHardness: number = 10;
    hardnes: number;
    health: number;
    price: number = 1;
    amount: number = 0;
    cost: number;


    unlocked: boolean = false;
    bought: boolean = false;

    amountLabel: HTMLSpanElement;
    labelImg: HTMLImageElement;

    constructor(name: string, unlocked: boolean, title: string = name)
    {
        this.path = `../assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `../assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `../assets/sprites/coals/smaller/${name}.png`;
        this.title = title

        this.baseHardness = quadtraticGrowth(4 + Coal.coals.length);
        this.hardnes = this.baseHardness
        this.health = this.hardnes
        this.price = linearGrowth(Coal.coals.length)
        this.unlocked = unlocked
        this.bought = unlocked
        this.cost = this.price * 10

        Coal.coals.push(this);

        let li = document.createElement("li");

        if (Coal.coals.length == 1 || Coal.coals.length % 4 == 1)
        {
            let div = document.createElement("div");
            coalList.appendChild(div);
            div.appendChild(li);
        }
        else
        {
            let div = coalList.lastElementChild as HTMLDivElement;
            div.appendChild(li);
        }

        let img = document.createElement("img")
        li.appendChild(img);
        img.alt = name;

        if (this.unlocked)
        {
            img.src = this.path;
        }
        else
        {
            img.src = "../assets/sprites/ui/lock.png";
        }

        let span = document.createElement("span");
        li.appendChild(span);
        span.id = `${name}-label`;
        span.innerHTML = this.amount.toString();
        this.amountLabel = span;
        this.labelImg = img;
    }
    
    public static nextCoal(current: Coal | number): Coal
    {
        return next<Coal>(Coal.coals, current);
    }

    public unlock(): void
    {
        if  (this.unlocked && this.bought)
        {
            return;
        }

        this.unlocked = true;
        this.bought = true;

        this.updateLabel();
    }

    public click() :void
    {
        if (currentCoal.health == 0)
        {
            coalFinish()
        }
        else
        {
            if (currentCoal.health - currentTool.miningPower < 0)
            {
                coalFinish()
            }
            else
            {
                currentCoal.health -= currentTool.miningPower
            }
        }
        
        updateLabels()
    }

    public finish() :void
    {
        this.amount += 1
        this.health = this.hardnes

        if (coalShow)
        {
            currentCoal = Coal.nextCoal(currentCoal)
        }

        Coal.updateLabels()
    }

    public static updateLabels() :void
    {
        for (let coal of Coal.coals)
        {
            coal.updateLabel()
        }
    }

    public updateLabel()
    {
        this.amountLabel.innerHTML = this.amount.toString();
        
        if (this.unlocked)
        {
            this.labelImg.src = this.path;
        }
        else
        {
            this.labelImg.src = "../assets/sprites/ui/lock.png";
        }
    }

    public sell()
    {
        money += this.amount * this.price;
        this.amount = 0;
        updateLabels();
    }

    public static sellAll()
    {
        for (const coal of Coal.coals)
        {
            coal.sell()    
        }
    }

    public static coal = new Coal("better-coal", true, "Węgiel")
    public static blackRock = new Coal("black-rock", false, "Czarny Kamień")
    public static lignite = new Coal("lignite", false, "Węgiel Brunatny")
    public static charcoal = new Coal("charcoal", false, "Węgiel Drzewny")
    public static rockCoal = new Coal("rock-coal", false, "Węgiel Kamienny")
    public static anthracite = new Coal("anthracite", false, "Antracyt")
    public static coalCoke = new Coal("coal-coke", false, "Koks Węglowy")
    public static oilCoke = new Coal("oil-coke", false, "Koks Naftowy")
    public static airCoal = new Coal("aircoal", false, "Aerowęgiel")
    public static spaceCoal = new Coal("space-coal", false, "Kosmiczny Węgiel") //On jest dobry
    public static voidCoal = new Coal("void-coal", false, "Węgiel Pustki")
    public static darkMatterCoal = new Coal("dark-matter-coal", false, "Węgiel Ciemnej Materii")
    public static terminatorCoal = new Coal("terminator-coal", false, "Węgiel Terminatora")
    public static matrixCoal = new Coal("matrix-coal", false, "Węgiel Matrix")
    public static holyCoal = new Coal("holy-coal", false, "Święty Węgiel")
    public static nigger = new Coal("nigger", false, "Najczarniejszy Węgiel")
}

currentCoal = Coal.coal;

class CoalItem //extends Item
{
    coal: Coal;

    constructor(coal: Coal)
    {
        //Na razie to będzie lokalne
        let title = document.createElement("h3")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let priceTag = document.createElement("p")

        Menu.coalsMenu.controlsContainer.appendChild(div)
        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(priceTag)
        div.classList.add("item", "shop-item")
        div.addEventListener("click", this.buy.bind(this))

        img.src = coal.scalledPath
        title.innerHTML = coal.title
        priceTag.innerHTML = `${coal.cost} $`;

        this.coal = coal

        Menu.coalsMenu.controls.push(this)
    }

    public buy()
    {
        if (money < this.coal.cost || this.coal.bought)
        {
            return
        }

        money -= this.coal.cost
        currentCoal = this.coal

        this.coal.unlock()

        Menu.coalsMenu.close()
        updateLabels()
    }

    public static init()
    {
        for (const coal of Coal.coals)
        {
            if (coal.unlocked)
            {
                continue
            }

            new CoalItem(coal)
        }
    }
}
