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
