"use strict";
class Coal {
    constructor(name, unlocked) {
        this.baseHardness = 10;
        this.price = 1;
        this.amount = 0;
        this.unlocked = false;
        this.path = `assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `assets/sprites/coals/smaller/${name}.png`;
        this.baseHardness = sigma(4 + Coal.coals.length);
        this.hardnes = this.baseHardness;
        this.health = this.hardnes;
        this.price = linearGrowth(Coal.coals.length);
        this.unlocked = unlocked;
        Coal.coals.push(this);
        let li = document.createElement("li");
        if (Coal.coals.length == 1 || Coal.coals.length % 4 == 1) {
            let div = document.createElement("div");
            coalList.appendChild(div);
            div.appendChild(li);
        }
        else {
            let div = coalList.lastElementChild;
            div.appendChild(li);
        }
        let img = document.createElement("img");
        li.appendChild(img);
        img.alt = name;
        if (this.unlocked) {
            img.src = "../" + this.smallerPath;
        }
        else {
            img.src = "../assets/sprites/ui/lock.png";
        }
        let span = document.createElement("span");
        li.appendChild(span);
        span.id = `${name}-label`;
        span.innerHTML = this.amount.toString();
        this.amountLabel = span;
    }
    static nextCoal(current) {
        return next(Coal.coals, current);
    }
    unlock() {
        if (this.unlocked) {
            return;
        }
        this.unlocked = true;
    }
}
Coal.coals = new Array();
Coal.coal = new Coal("better-coal", true);
Coal.blackRock = new Coal("black-rock", true);
Coal.lignite = new Coal("lignite", true);
Coal.charcoal = new Coal("charcoal", true);
Coal.rockCoal = new Coal("rock-coal", true);
Coal.anthracite = new Coal("anthracite", true);
Coal.coalCoke = new Coal("coal-coke", true);
Coal.oilCoke = new Coal("oil-coke", true);
Coal.airCoal = new Coal("aircoal", true);
Coal.spaceCoal = new Coal("space-coal", true); //On jest dobry
Coal.voidCoal = new Coal("void-coal", true);
Coal.darkMatterCoal = new Coal("dark-matter-coal", true);
Coal.nigger = new Coal("nigger", true);
