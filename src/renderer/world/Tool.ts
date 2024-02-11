class Tool
{
    public static tools: Tool[] = new Array<Tool>();

    public name: string;
    public spritePath: string;
    public miningPower: number = 1;

    constructor(name: string)
    {
        this.name = name;
        this.spritePath = `assets/sprites/tools/${name}.png`;
        
    }

    private static add(n: string, miningPower: number) :Tool
    {
        let tool = new Tool(n);
        tool.miningPower = miningPower;

        Tool.tools.push(tool);

        return tool;
    }

    public updateCursor() :void
    {
        coalButton.style.cursor = `url(../${this.spritePath}), auto`;
    }

    public static hand: Tool = Tool.add("hand", 1);
    public static pickaxe: Tool = Tool.add("pickaxe", 5);
}
