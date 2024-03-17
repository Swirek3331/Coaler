"use strict";
class Tool {
    constructor(name, power = 1, title = name) {
        this.name = name;
        this.title = title;
        this.path = `../assets/sprites/tools/base/${name}.png`;
        this.scalledPath = `../assets/sprites/tools/scalled/${name}.png`;
        this.miningPower = power;
        this.cost = power * 10;
        Tool.tools.push(this);
    }
    updateCursor() {
        coalButton.style.cursor = `url(${this.scalledPath}), auto`;
    }
}
Tool.tools = new Array();
Tool.hand = new Tool("hand");
Tool.pickaxe = new Tool("pickaxe", 5);
