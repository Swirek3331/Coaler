"use strict";
class Coal {
    //Muszę wszystko do konstruktora wpierdolić
    //tu nie ma obiektowości takiej jak zwykle aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    constructor(name, hardnes, price, unlocked) {
        this.hardness = 10;
        this.price = 1;
        this.amount = 0;
        this.unlocked = false;
        this.path = `assets/sprites/coals/normal/${name}.png`;
        this.scalledPath = `assets/sprites/coals/scalled/${name}.png`;
        this.smallerPath = `assets/sprites/coals/smaller/${name}.png`;
        this.hardness = hardnes;
        this.health = hardnes;
        this.price = price;
        this.unlocked = unlocked;
        Coal.coals.push(this);
        let li = document.createElement("li");
        //TODO: divy
        coalList.appendChild(li);
        li.innerHTML = `<img src="../${this.smallerPath}" alt="${name}"/> <span id="${name}-label">${this.amount}</span>`;
        this.amountLabel = document.getElementById(name + "-label");
    }
    static nextCoal(current) {
        if (typeof current == "number") {
            if (current >= Coal.coals.length - 1)
                return Coal.coals[0];
            else
                return Coal.coals[current + 1];
        }
        else {
            if (current == Coal.coals[Coal.coals.length - 1])
                return Coal.coals[0];
            else
                return Coal.coals[Coal.coals.indexOf(current) + 1];
        }
    }
    unlock() {
        if (this.unlocked) {
            return;
        }
        this.unlocked = true;
    }
}
Coal.coals = new Array();
Coal.coal = new Coal("better-coal", 10, 1, true);
