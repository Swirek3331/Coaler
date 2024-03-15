class Menu {
    public static menus = new Array<Menu>();

    button: HTMLElement
    path: string
    scalledPath: string
    opened: boolean = false
    shoperContainer: HTMLDivElement = document.createElement("div")
    controlsContainer: HTMLDivElement = document.createElement("div")
    controls: HTMLElement[] = new Array<HTMLElement>()
    
    //narazie opiera się wszystko na zmianie tła

    constructor(name: string)
    {
        let menuButtons = menu.querySelectorAll("li")!
        this.button = menuButtons[Menu.menus.length]

        this.path = `../assets/sprites/menus/${name}.png`;
        this.scalledPath = `../assets/sprites/menus/${name}-scalled.png`;

        greyDiv.appendChild(this.shoperContainer)
        greyDiv.appendChild(this.controlsContainer)

        this.shoperContainer.style.visibility = "hidden";
        this.shoperContainer.id = `${name}-shoper-container`;

        this.controlsContainer.style.visibility = "hidden";
        this.controlsContainer.id = `${name}-controls-container`;

        this.button.addEventListener("click", this.open.bind(this))
        
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
        greyDiv.style.backgroundImage = `url(${this.scalledPath})`;
        this.shoperContainer.style.visibility = "visible";
        this.controlsContainer.style.visibility = "visible";
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
        this.shoperContainer.style.visibility = "hidden";
        this.controlsContainer.style.visibility = "hidden";
        this.opened = false
    }

    static productionMenu: Menu = new Menu("production")
    static shopMenu: Menu = new Menu("shop")
    static emissionMenu: Menu = new Menu("emission")
    static coalsMenu: Menu = new Menu("coals")
}
