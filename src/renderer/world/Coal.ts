class Coal 
{
    public static coals: Coal[] = new Array();

    readonly path: string;
    readonly scalledPath: string;
    readonly smallerPath: string;

    readonly hardness: number = 10;
    health: number;
    price: number = 1;
    amount: number = 0;

    unlocked: boolean = false;

    amountLabel: HTMLSpanElement;


    //Muszę wszystko do konstruktora wpierdolić
    //tu nie ma obiektowości takiej jak zwykle aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    constructor(name: string, hardnes: number, price: number, unlocked: boolean)
    {
        this.path = `assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `assets/sprites/coals/smaller/${name}.png`;

        this.hardness = hardnes
        this.health = hardnes;
        this.price = price
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
        if (typeof current == "number")
        {
            if (current >= Coal.coals.length - 1)
                return Coal.coals[0]
            else
                return Coal.coals[current + 1]
        }
        else
        {
            if (current == Coal.coals[Coal.coals.length - 1])
                return Coal.coals[0]
            else
                return Coal.coals[Coal.coals.indexOf(current) + 1]
        }
    }

    public unlock(): void
    {
        if  (this.unlocked)
        {
            return;
        }

        this.unlocked = true;
    }

    public static coal = new Coal("better-coal", 10, 1, true)
}
