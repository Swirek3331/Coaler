class Coal 
{
    public static coals: Coal[] = new Array<Coal>();

    readonly path: string;
    readonly scalledPath: string;
    readonly smallerPath: string;

    readonly baseHardness: number = 10;
    hardnes: number;
    health: number;
    price: number = 1;
    amount: number = 0;


    unlocked: boolean = false;

    amountLabel: HTMLSpanElement;
    labelImg: HTMLImageElement;

    constructor(name: string, unlocked: boolean)
    {
        this.path = `../assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `../assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `../assets/sprites/coals/smaller/${name}.png`;

        this.baseHardness = quadtraticGrowth(4 + Coal.coals.length);
        this.hardnes = this.baseHardness
        this.health = this.hardnes
        this.price = linearGrowth(Coal.coals.length)
        this.unlocked = unlocked

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
        if  (this.unlocked)
        {
            return;
        }

        this.unlocked = true;
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

    public static coal = new Coal("better-coal", true)
    public static blackRock = new Coal("black-rock", false)
    public static lignite = new Coal("lignite", false)
    public static charcoal = new Coal("charcoal", false)
    public static rockCoal = new Coal("rock-coal", false)
    public static anthracite = new Coal("anthracite", false)
    public static coalCoke = new Coal("coal-coke", false)
    public static oilCoke = new Coal("oil-coke", false)
    public static airCoal = new Coal("aircoal", false)
    public static spaceCoal = new Coal("space-coal", false) //On jest dobry
    public static voidCoal = new Coal("void-coal", false)
    public static darkMatterCoal = new Coal("dark-matter-coal", false)
    public static nigger = new Coal("nigger", false)
}

currentCoal = Coal.coal;