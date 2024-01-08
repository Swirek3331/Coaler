"use strict";
var _a;
class Tool {
    constructor(name) {
        this.miningPower = 1;
        this.name = name;
        this.spritePath = `assets/sprites/ui/tools/${name}.png`;
    }
    static add(n, miningPower) {
        let tool = new _a(n);
        tool.miningPower = miningPower;
        return tool;
    }
    updateCursor() {
        coalButton.style.cursor = `url(../${this.spritePath}), auto`;
    }
}
_a = Tool;
Tool.hand = _a.add("hand", 1);
Tool.pickaxe = _a.add("pickaxe", 5);
