"use strict";
class Coal {
    constructor(name) {
        this.path = `assets/sprites/coal/${name}.png`;
        this.scalledPath = `assets/sprites/coal/scalled/${name}.png`;
        this.smallerPath = `assets/sprites/coal/smaller/${name}.png`;
        Coal.coals.push(this);
    }
}
