class Menu {
    public static menus = new Array<Menu>();

    private static width: number = 1024;
    private static height: number = 512;

    path: string
    scalledPath: string
    opened: boolean = false

    dialog: HTMLDialogElement = document.createElement("dialog")
    container: HTMLDivElement = document.createElement("div")
    shoperContainer: HTMLDivElement = document.createElement("div")
    controlsContainer: HTMLDivElement = document.createElement("div")
    controls: any[] = new Array<any>()

    constructor(name: string, title: string = name)
    {
        this.path = `../assets/sprites/menus/${name}.png`;
        this.scalledPath = `../assets/sprites/menus/${name}-scalled.png`;

        greyDiv.appendChild(this.container)
        this.container.addEventListener("click", this.open.bind(this))

        const label = document.createElement("h2")
        this.container.appendChild(label)
        label.innerHTML = title
        

        document.body.appendChild(this.dialog)
        this.dialog.appendChild(this.shoperContainer)
        this.dialog.appendChild(this.controlsContainer)
        this.dialog.addEventListener("close", this.close.bind(this))//nie wiem czy to jest bezpieczne/
        this.dialog.style.width = `${Menu.width}px`;
        this.dialog.style.height = `${Menu.height}px`;
        this.dialog.style.backgroundImage = `url(${this.scalledPath})`;
        this.dialog.id = `${name}-menu-dialog`;
        this.dialog.classList.add("menu-dialog")

        this.shoperContainer.style.width = `${Menu.width/2}px`;
        this.shoperContainer.style.height = `${Menu.height}px`;
        this.shoperContainer.id = `${name}-menu-shoper-container`;

        this.controlsContainer.style.width = `${Menu.width/2}px`;
        this.controlsContainer.style.height = `${Menu.height}px`;
        this.controlsContainer.id = `${name}-menu-controls-container`;
        this.controlsContainer.classList.add("shop-container")
        
        Menu.menus.push(this)
    }

    public open()
    {
        if (this.opened)
        {
            this.close()
            return
        }

        this.closeRest()
        this.dialog.showModal()
        this.dialog.style.display = "flex";
        this.opened = true
    }

    public closeRest()
    {
        for (let i = 0; i < Menu.menus.length; i++)
        {
            if (Menu.menus.indexOf(this) == i)
            {
                break
            }

            Menu.menus[i].close()
        }
    }

    public close()
    {
        if (!this.opened)
        {
            return
        }

        this.dialog.close()
        this.dialog.style.display = "none";
        this.opened = false
    }

    static shopMenu: Menu = new Menu("shop", "Sklep")
    static sellMenu: Menu = new Menu("sell", "Sprzedaż")
    static emissionMenu: Menu = new Menu("emission")
    static coalsMenu: Menu = new Menu("coals", "Węgle")
}

class ShopItems
{
    tool: Tool;

    constructor(tool: Tool)
    {
        //Na razie to będzie lokalne
        let title = document.createElement("h3")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let priceTag = document.createElement("p")

        Menu.shopMenu.controlsContainer.appendChild(div)
        div.appendChild(title)
        div.appendChild(img)
        div.appendChild(priceTag)
        div.classList.add("item", "shop-item")
        div.addEventListener("click", this.buy.bind(this))

        img.src = tool.scalledPath
        title.innerHTML = tool.title
        priceTag.innerHTML = `${tool.cost} $`;

        this.tool = tool

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

        money -= this.tool.cost
        currentTool = this.tool

        Menu.shopMenu.close()
        updateLabels()
    }

    public static init()
    {
        for (const tool of Tool.tools)
        {
            new ShopItems(tool)
        }
    }
}
