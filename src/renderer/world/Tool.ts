class Tool
{
    public static tools: Tool[] = new Array<Tool>();

    public name: string;
    public title: string;
    public path: string;
    public scalledPath: string;

    public miningPower: number;
    public cost: number;

    public bought: boolean = false;

    constructor(name: string,  power: number = 1, title: string = name, unlocked: boolean = false)
    {
        this.name = name;
        this.title = title;
        this.path = `../assets/sprites/tools/base/${name}.png`;
        this.scalledPath = `../assets/sprites/tools/scalled/${name}.png`;

        this.miningPower = power;
        this.cost = power * 10;

        this.bought = unlocked;

        Tool.tools.push(this)
    }

    public updateCursor() :void
    {
        coalButton.style.cursor = `url(${this.scalledPath}), auto`;
    }

    public static hand: Tool = new Tool("hand", 1, "Ręka", true);
    public static pickaxe: Tool = new Tool("pickaxe", 5, "Kilof");
    public static crowbar: Tool = new Tool("crowbar", 10, "Łom");
    public static ironHand: Tool = new Tool("iron-hand", 15, "Żelazna ręka");
    public static diamondPickaxe: Tool = new Tool("diamond-pickaxe", 30, "Diamentowy kilof");
    public static csharper: Tool = new Tool("csharper", 50, "C#per");
}

currentTool = Tool.hand;

class ShopItems
{
    tool: Tool;
    div: HTMLDivElement;

    constructor(tool: Tool)
    {
        //Na razie to będzie lokalne
        let title = document.createElement("h3")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let priceTag = document.createElement("p")
        let powerTag = document.createElement("p")

        if (Menu.shopMenu.controls.length == 0 || Menu.shopMenu.controls.length % 3 == 0)
        {
            let flexDiv = document.createElement("div")
            Menu.shopMenu.controlsContainer.appendChild(flexDiv)
            flexDiv.classList.add("flex")
            flexDiv.style.width = "100%";
            flexDiv.style.height = "33.33%";
            flexDiv.appendChild(div)
        }
        else
        {
            let flexDiv = Menu.shopMenu.controlsContainer.lastElementChild as HTMLDivElement
            flexDiv.appendChild(div)
        }

        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(powerTag)
        div.appendChild(priceTag)
        div.classList.add("item", "shop-item")
        div.addEventListener("click", this.buy.bind(this))

        img.src = tool.scalledPath
        title.innerHTML = tool.title
        powerTag.innerHTML = `Moc: ${tool.miningPower}`;
        priceTag.innerHTML = `Cena: ${tool.cost} $`;

        this.tool = tool
        this.div = div

        Menu.shopMenu.controls.push(this)
    }

    //na razie
    public equip()
    {
        currentTool = this.tool
        currentTool.updateCursor()
    }

    public buy()
    {
        if (money < this.tool.cost || this.tool == currentTool)
        {
            return
        }

        if (currentTool.miningPower > this.tool.miningPower)
        {
            this.tool.bought = true
            return
        }

        money -= this.tool.cost
        currentTool = this.tool
        this.div.remove()

        Menu.shopMenu.close()
        updateLabels()
    }

    public static init()
    {
        for (const tool of Tool.tools)
        {
            if (tool.bought)
            {
                continue
            }

            new ShopItems(tool)
        }
    }
}
