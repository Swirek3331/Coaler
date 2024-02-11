"use strict";
class Tool {
    constructor(name) {
        this.miningPower = 1;
        this.name = name;
        this.spritePath = `assets/sprites/tools/${name}.png`;
    }
    static add(n, miningPower) {
        let tool = new Tool(n);
        tool.miningPower = miningPower;
        Tool.tools.push(tool);
        return tool;
    }
    updateCursor() {
        coalButton.style.cursor = `url(../${this.spritePath}), auto`;
    }
}
Tool.tools = new Array();
Tool.hand = Tool.add("hand", 1);
Tool.pickaxe = Tool.add("pickaxe", 5);
