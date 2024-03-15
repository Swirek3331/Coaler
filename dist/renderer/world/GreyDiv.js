"use strict";
class Menu {
    //narazie opiera się wszystko na zmianie tła
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
        Menu.menus.push(this);
    }
    open() {
        if (this.opened) {
            this.close();
            return;
        }
        this.closeRest();
        greyDiv.style.backgroundImage = `url(${this.scalledPath})`;
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
        greyDiv.style.backgroundImage = "none";
        this.opened = false;
    }
}
Menu.menus = new Array();
Menu.productionMenu = new Menu("production");
Menu.shopMenu = new Menu("shop");
Menu.emissionMenu = new Menu("emission");
Menu.coalsMenu = new Menu("coals");
