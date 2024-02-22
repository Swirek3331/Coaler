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

    constructor(name: string, unlocked: boolean)
    {
        this.path = `assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `assets/sprites/coals/smaller/${name}.png`;

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
            img.src = "../" + this.smallerPath;
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
    }

    public static coal = new Coal("better-coal", true)
    public static blackRock = new Coal("black-rock", true)
    public static lignite = new Coal("lignite", true)
    public static charcoal = new Coal("charcoal", true)
    public static rockCoal = new Coal("rock-coal", true)
    public static anthracite = new Coal("anthracite", true)
    public static coalCoke = new Coal("coal-coke", true)
    public static oilCoke = new Coal("oil-coke", true)
    public static airCoal = new Coal("aircoal", true)
    public static spaceCoal = new Coal("space-coal", true) //On jest dobry
    public static voidCoal = new Coal("void-coal", true)
    public static darkMatterCoal = new Coal("dark-matter-coal", true)
    public static nigger = new Coal("nigger", true)
}
