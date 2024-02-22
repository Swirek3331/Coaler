"use strict";
class Tool {
    constructor(name, power) {
        this.miningPower = 1;
        this.name = name;
        this.miningPower = power;
        this.spritePath = `assets/sprites/tools/${name}.png`;
        Tool.tools.push(this);
    }
    updateCursor() {
        coalButton.style.cursor = `url(../${this.spritePath}), auto`;
    }
}
Tool.tools = new Array();
Tool.hand = new Tool("hand", 1);
Tool.pickaxe = new Tool("pickaxe", 5);
