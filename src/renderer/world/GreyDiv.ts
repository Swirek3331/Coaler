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
    controls: HTMLElement[] = new Array<HTMLElement>()

    constructor(name: string)
    {
        this.path = `../assets/sprites/menus/${name}.png`;
        this.scalledPath = `../assets/sprites/menus/${name}-scalled.png`;

        greyDiv.appendChild(this.container)
        this.container.addEventListener("click", this.open.bind(this))

        document.body.appendChild(this.dialog)
        this.dialog.classList.add("flex")
        this.dialog.appendChild(this.shoperContainer)
        this.dialog.appendChild(this.controlsContainer)
        this.dialog.style.width = `${Menu.width}px`;
        this.dialog.style.height = `${Menu.height}px`;
        this.dialog.style.backgroundImage = `url(${this.scalledPath})`;

        this.shoperContainer.style.width = `${Menu.width/2}px`;
        this.shoperContainer.style.height = `${Menu.height}px`;

        this.controlsContainer.style.width = `${Menu.width/2}px`;
        this.controlsContainer.style.height = `${Menu.height}px`;
        
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

        greyDiv.style.backgroundImage = "none";
        this.opened = false
    }

    static productionMenu: Menu = new Menu("production")
    static shopMenu: Menu = new Menu("shop")
    static emissionMenu: Menu = new Menu("emission")
    static coalsMenu: Menu = new Menu("coals")
}
