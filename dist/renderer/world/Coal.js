"use strict";
class Coal {
    constructor(name, unlocked, title = name) {
        this.baseHardness = 10;
        this.price = 1;
        this.amount = 0;
        this.unlocked = false;
        this.bought = false;
        this.path = `../assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `../assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `../assets/sprites/coals/smaller/${name}.png`;
        this.title = title;
        this.baseHardness = quadtraticGrowth(4 + Coal.coals.length);
        this.hardnes = this.baseHardness;
        this.health = this.hardnes;
        this.price = linearGrowth(Coal.coals.length);
        this.unlocked = unlocked;
        this.bought = unlocked;
        this.cost = this.price * 10;
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
            img.src = this.path;
        }
        else {
            img.src = "../assets/sprites/ui/lock.png";
        }
        let span = document.createElement("span");
        li.appendChild(span);
        span.id = `${name}-label`;
        span.innerHTML = this.amount.toString();
        this.amountLabel = span;
        this.labelImg = img;
    }
    static nextCoal(current) {
        return next(Coal.coals, current);
    }
    unlock() {
        if (this.unlocked && this.bought) {
            return;
        }
        this.unlocked = true;
        this.bought = true;
        this.updateLabel();
    }
    click() {
        if (currentCoal.health == 0) {
            coalFinish();
        }
        else {
            if (currentCoal.health - currentTool.miningPower < 0) {
                coalFinish();
            }
            else {
                currentCoal.health -= currentTool.miningPower;
            }
        }
        updateLabels();
    }
    finish() {
        this.amount += 1;
        this.health = this.hardnes;
        if (coalShow) {
            currentCoal = Coal.nextCoal(currentCoal);
        }
        Coal.updateLabels();
    }
    static updateLabels() {
        for (let coal of Coal.coals) {
            coal.updateLabel();
        }
    }
    updateLabel() {
        this.amountLabel.innerHTML = this.amount.toString();
        if (this.unlocked) {
            this.labelImg.src = this.path;
        }
        else {
            this.labelImg.src = "../assets/sprites/ui/lock.png";
        }
    }
    sell() {
        money += this.amount * this.price;
        this.amount = 0;
        updateLabels();
    }
    static sellAll() {
        for (const coal of Coal.coals) {
            coal.sell();
        }
    }
}
Coal.coals = new Array();
Coal.coal = new Coal("better-coal", true);
Coal.blackRock = new Coal("black-rock", false);
Coal.lignite = new Coal("lignite", false);
Coal.charcoal = new Coal("charcoal", false);
Coal.rockCoal = new Coal("rock-coal", false);
Coal.anthracite = new Coal("anthracite", false);
Coal.coalCoke = new Coal("coal-coke", false);
Coal.oilCoke = new Coal("oil-coke", false);
Coal.airCoal = new Coal("aircoal", false);
Coal.spaceCoal = new Coal("space-coal", false); //On jest dobry
Coal.voidCoal = new Coal("void-coal", false);
Coal.darkMatterCoal = new Coal("dark-matter-coal", false);
Coal.nigger = new Coal("nigger", false);
currentCoal = Coal.coal;
class CoalItem //extends Item
 {
    constructor(coal) {
        //Na razie to będzie lokalne
        let title = document.createElement("h3");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let priceTag = document.createElement("p");
        Menu.coalsMenu.controlsContainer.appendChild(div);
        div.appendChild(title);
        div.appendChild(img);
        div.appendChild(priceTag);
        div.classList.add("item", "shop-item");
        div.addEventListener("click", this.buy.bind(this));
        img.src = coal.scalledPath;
        title.innerHTML = coal.title;
        priceTag.innerHTML = `${coal.cost} $`;
        this.coal = coal;
        Menu.coalsMenu.controls.push(this);
    }
    buy() {
        if (money < this.coal.cost || this.coal.bought) {
            return;
        }
        money -= this.coal.cost;
        currentCoal = this.coal;
        this.coal.unlock();
        Menu.coalsMenu.close();
        updateLabels();
    }
    static init() {
        for (const coal of Coal.coals) {
            new CoalItem(coal);
        }
    }
}
