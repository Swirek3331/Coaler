class Tool
{
    public static tools: Tool[] = new Array<Tool>();

    public name: string;
    public spritePath: string;
    public miningPower: number = 1;

    constructor(name: string,  power: number)
    {
        this.name = name;
        this.miningPower = power;
        this.spritePath = `assets/sprites/tools/${name}.png`;

        Tool.tools.push(this);
        
    }

    public updateCursor() :void
    {
        coalButton.style.cursor = `url(../${this.spritePath}), auto`;
    }

    public static hand: Tool = new Tool("hand", 1);
    public static pickaxe: Tool = new Tool("pickaxe", 5);
}
