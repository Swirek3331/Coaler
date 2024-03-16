class Tool
{
    public static tools: Tool[] = new Array<Tool>();

    public name: string;
    public path: string;
    public scalledPath: string;
    public miningPower: number;
    public title: string;

    constructor(name: string,  power: number = 1, title: string = name)
    {
        this.name = name;
        this.miningPower = power;
        this.path = `../assets/sprites/tools/base/${name}.png`;
        this.scalledPath = `../assets/sprites/tools/scalled/${name}.png`;
        this.title = title;

        Tool.tools.push(this)
    }

    public updateCursor() :void
    {
        coalButton.style.cursor = `url(${this.scalledPath}), auto`;
    }

    public static hand: Tool = new Tool("hand");
    public static pickaxe: Tool = new Tool("pickaxe", 5);
}
