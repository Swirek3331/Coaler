class Tool
{
    public static tools: Tool[] = new Array<Tool>();

    public name: string;
    public title: string;
    public path: string;
    public scalledPath: string;

    public miningPower: number;
    public cost: number;

    constructor(name: string,  power: number = 1, title: string = name)
    {
        this.name = name;
        this.title = title;
        this.path = `../assets/sprites/tools/base/${name}.png`;
        this.scalledPath = `../assets/sprites/tools/scalled/${name}.png`;

        this.miningPower = power;
        this.cost = power * 10;


        Tool.tools.push(this)
    }

    public updateCursor() :void
    {
        coalButton.style.cursor = `url(${this.scalledPath}), auto`;
    }

    public static hand: Tool = new Tool("hand", 1, "Ręka");
    public static pickaxe: Tool = new Tool("pickaxe", 5, "Kilof");
    public static crowbar: Tool = new Tool("crowbar", 10, "Łom");
}

currentTool = Tool.hand;