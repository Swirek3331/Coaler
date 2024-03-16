"use strict";
class Menu {
    constructor(name) {
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
        document.body.appendChild(this.dialog);
        this.dialog.appendChild(this.shoperContainer);
        this.dialog.appendChild(this.controlsContainer);
        this.dialog.addEventListener("close", this.close.bind(this)); //nie wiem czy to jest bezpieczne/
        this.dialog.style.width = `${Menu.width}px`;
        this.dialog.style.height = `${Menu.height}px`;
        this.dialog.style.backgroundImage = `url(${this.scalledPath})`;
        this.shoperContainer.style.width = `${Menu.width / 2}px`;
        this.shoperContainer.style.height = `${Menu.height}px`;
        this.controlsContainer.style.width = `${Menu.width / 2}px`;
        this.controlsContainer.style.height = `${Menu.height}px`;
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
    //bezużyteczne już
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
Menu.productionMenu = new Menu("production");
Menu.shopMenu = new Menu("shop");
Menu.emissionMenu = new Menu("emission");
Menu.coalsMenu = new Menu("coals");
