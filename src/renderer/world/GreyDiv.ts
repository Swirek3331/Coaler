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
        //this.path = `../assets/sprites/menus/${name}.png`;
        //this.scalledPath = `../assets/sprites/menus/${name}-scalled.png`;
        this.path = `../assets/sprites/menus/shop.png`;
        this.scalledPath = `../assets/sprites/menus/shop-scalled.png`;

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
    static productionMenu: Menu = new Menu("production", "Produkcja")
    static coalsMenu: Menu = new Menu("coals", "Węgle")
}
