"use strict";
class Coal {
    constructor(name, unlocked) {
        this.baseHardness = 10;
        this.price = 1;
        this.amount = 0;
        this.unlocked = false;
        this.path = `../assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `../assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `../assets/sprites/coals/smaller/${name}.png`;
        this.baseHardness = quadtraticGrowth(4 + Coal.coals.length);
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
        if (this.unlocked) {
            return;
        }
        this.unlocked = true;
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
