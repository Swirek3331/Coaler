class Menu {
    public static menus = new Array<Menu>();

    button: HTMLElement
    path: string
    scalledPath: string
    opened: boolean = false

    constructor(name: string)
    {
        let menuButtons = menu.querySelectorAll("li")!
        this.button = menuButtons[Menu.menus.length]

        this.path = `../assets/sprites/menus/${name}.png`;
        this.scalledPath = `../assets/sprites/menus/${name}-scalled.png`;

        this.button.addEventListener("click", this.open.bind(this))
        
        Menu.menus.push(this)
    }

    open()
    {
        if (this.opened)
        {
            this.close()
            return
        }

        this.closeRest()
        greyDiv.style.backgroundImage = `url(${this.scalledPath})`;
        this.opened = true
    }

    close()
    {
        if (!this.opened)
        {
            return
        }

        greyDiv.style.backgroundImage = "none";
        this.opened = false
    }

    closeRest()
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

    static productionMenu: Menu = new Menu("production")
    static shopMenu: Menu = new Menu("shop")
    static emissionMenu: Menu = new Menu("emission")
    static coalsMenu: Menu = new Menu("coals")
}
