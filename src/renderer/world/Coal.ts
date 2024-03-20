class Coal 
{
    public static coals: Coal[] = new Array<Coal>();

    readonly path: string;
    readonly scalledPath: string;
    readonly shopPath: string;
    title: string

    readonly baseHardness: number = 10;
    hardnes: number;
    health: number;
    price: number = 1;
    amount: number = 0;
    cost: number;
    rarerness: number = 1;


    unlocked: boolean = false;
    bought: boolean = false;

    amountLabel: HTMLSpanElement;
    labelImg: HTMLImageElement;

    constructor(name: string, unlocked: boolean, title: string = name)
    {
        this.path = `../assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `../assets/sprites/coals/scalled/${name}.png`;
        this.shopPath = `../assets/sprites/coals/shop/${name}.png`;
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

        if (Coal.coals.length == 1 || Coal.coals.length % 3 == 1)
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
        let damage = currentTool.miningPower

        while (damage > 0)
        {
            if (currentCoal.health <= 0)
            {
                Coal.finish()
            }
            else
            {
                const remainingHealth = currentCoal.health - damage
    
                if (remainingHealth < 0) 
                {
                    Coal.finish()
                    damage = Math.abs(remainingHealth)
                }
                else
                {
                    currentCoal.health -= damage;
                    damage = 0;
                }
            }
        }    
        
        updateLabels()
    }

    public static finish() :void
    {
        currentCoal.amount += coalAmount;
        currentCoal.health = coalHealthBar.max
        
        if (coalShow)
        {
            currentCoal = Coal.nextCoal(currentCoal)
        }
    
        updateLabels()
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

    public static coalAmount(): number
    {
        let sum = 0;

        for (const coal of Coal.coals)
        {
            sum += coal.amount
        }

        return sum
    }

    public static funds(): number
    {
        let sum = 0;

        for (const coal of Coal.coals)
        {
            sum += coal.amount * coal.price
        }

        return sum
    }

    public static coal = new Coal("better-coal", true, "Węgiel")
    //public static blackRock = new Coal("black-rock", false, "Czarny Kamień")
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
    public static Items: CoalItem[] = new Array<CoalItem>()

    coal: Coal;
    div: HTMLDivElement;

    constructor(coal: Coal)
    {
        let title = document.createElement("h3")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let valueTag = document.createElement("p")
        let hardnesTag = document.createElement("p")
        let priceTag = document.createElement("p")

        if (Menu.coalsMenu.controls.length == 0 || Menu.coalsMenu.controls.length % 3 == 0)
        {
            let flexDiv = document.createElement("div")
            Menu.coalsMenu.controlsContainer.appendChild(flexDiv)
            flexDiv.classList.add("flex")
            flexDiv.style.width = "100%";
            flexDiv.style.height = "33.33%";
            flexDiv.appendChild(div)
        }
        else
        {
            let flexDiv = Menu.coalsMenu.controlsContainer.lastElementChild as HTMLDivElement
            flexDiv.appendChild(div)
        }

        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(valueTag)
        div.appendChild(hardnesTag)
        div.appendChild(priceTag)
        div.classList.add("item", "shop-item")
        div.addEventListener("click", this.buy.bind(this))

        img.src = coal.shopPath
        title.innerHTML = coal.title
        valueTag.innerHTML = `Wartość: ${coal.price}$`;//mylne
        hardnesTag.innerHTML = `Twardość: ${coal.hardnes}`;
        priceTag.innerHTML = `Cena: ${coal.cost}$`;

        this.coal = coal
        this.div = div

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
        this.div.remove()

        Menu.coalsMenu.close()
        updateLabels()
        CoalItem.update()
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

    public static update()
    {
        for (const flexDiv of Menu.coalsMenu.controlsContainer.children)
        {
            if (flexDiv.children.length == 0)
            {
                flexDiv.remove()
            }
        }
    }
}
