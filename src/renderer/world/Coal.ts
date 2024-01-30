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
        //TODO: divy
        coalList.appendChild(li);
        li.innerHTML = `<img src="../${this.smallerPath}" alt="${name}"/> <span id="${name}-label">${this.amount}</span>`;
        this.amountLabel = document.getElementById(name + "-label")!
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
