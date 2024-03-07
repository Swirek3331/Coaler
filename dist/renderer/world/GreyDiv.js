"use strict";
class Menu {
    constructor(name) {
        this.opened = false;
        let menuButtons = menu.querySelectorAll("li");
        this.button = menuButtons[Menu.menus.length];
        this.path = `assets/sprites/menu/${name}.png`;
        this.scalledPath = `assets/sprites/menu/${name}-scalled.png`;
        this.button.addEventListener("click", this.open);
        Menu.menus.push(this);
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
    open() {
        if (this.opened) {
            this.close();
            return;
        }
        this.closeRest();
        greyDiv.style.backgroundImage = `url(${this.scalledPath})`;
        this.opened = true;
    }
}
Menu.menus = new Array();
Menu.productionMenu = new Menu("production");
Menu.shopMenu = new Menu("shop");
Menu.emissionMenu = new Menu("emission");
Menu.coalsMenu = new Menu("coals");
