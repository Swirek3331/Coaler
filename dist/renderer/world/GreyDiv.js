"use strict";
class Menu {
    constructor(name, title = name) {
        this.opened = false;
        this.dialog = document.createElement("dialog");
        this.container = document.createElement("div");
        this.shoperContainer = document.createElement("div");
        this.controlsContainer = document.createElement("div");
        this.controls = new Array();
        this.path = `../assets/sprites/menus/${name}.png`;
        this.scalledPath = `../assets/sprites/menus/${name}-scalled.png`;
        greyDiv.appendChild(this.container);
        this.container.addEventListener("click", this.open.bind(this));
        const label = document.createElement("h2");
        this.container.appendChild(label);
        label.innerHTML = title;
        document.body.appendChild(this.dialog);
        this.dialog.appendChild(this.shoperContainer);
        this.dialog.appendChild(this.controlsContainer);
        this.dialog.addEventListener("close", this.close.bind(this)); //nie wiem czy to jest bezpieczne/
        this.dialog.style.width = `${Menu.width}px`;
        this.dialog.style.height = `${Menu.height}px`;
        this.dialog.style.backgroundImage = `url(${this.scalledPath})`;
        this.dialog.id = `${name}-menu-dialog`;
        this.dialog.classList.add("menu-dialog");
        this.shoperContainer.style.width = `${Menu.width / 2}px`;
        this.shoperContainer.style.height = `${Menu.height}px`;
        this.shoperContainer.id = `${name}-menu-shoper-container`;
        this.controlsContainer.style.width = `${Menu.width / 2}px`;
        this.controlsContainer.style.height = `${Menu.height}px`;
        this.controlsContainer.id = `${name}-menu-controls-container`;
        this.controlsContainer.classList.add("shop-container");
        Menu.menus.push(this);
    }
    open() {
        if (this.opened) {
            this.close();
            return;
        }
        this.closeRest();
        this.dialog.showModal();
        this.dialog.style.display = "flex";
        this.opened = true;
    }
    closeRest() {
        for (let i = 0; i < Menu.menus.length; i++) {
            if (Menu.menus.indexOf(this) == i) {
                break;
            }
            Menu.menus[i].close();
        }
    }
    close() {
        if (!this.opened) {
            return;
        }
        this.dialog.close();
        this.dialog.style.display = "none";
        this.opened = false;
    }
}
Menu.menus = new Array();
Menu.width = 1024;
Menu.height = 512;
Menu.shopMenu = new Menu("shop", "Sklep");
Menu.sellMenu = new Menu("sell", "Sprzedaż");
Menu.emissionMenu = new Menu("emission");
Menu.coalsMenu = new Menu("coals", "Węgle");
class ShopItems {
    constructor(tool) {
        //Na razie to będzie lokalne
        let title = document.createElement("h3");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let priceTag = document.createElement("p");
        Menu.shopMenu.controlsContainer.appendChild(div);
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(priceTag);
        div.classList.add("shop-item");
        div.addEventListener("click", this.buy.bind(this));
        img.src = tool.scalledPath;
        title.innerHTML = tool.title;
        priceTag.innerHTML = `${tool.cost} $`;
        this.tool = tool;
        Menu.shopMenu.controls.push(this);
    }
    //na razie
    equip() {
        currentTool = this.tool;
        currentTool.updateCursor();
    }
    buy() {
        if (money < this.tool.cost || this.tool == currentTool) {
            return;
        }
        money -= this.tool.cost;
        currentTool = this.tool;
        Menu.shopMenu.close();
        updateLabels();
    }
    static init() {
        for (const tool of Tool.tools) {
            new ShopItems(tool);
        }
    }
}
