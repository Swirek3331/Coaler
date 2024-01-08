class Tool
{
    public name: string;
    public spritePath: string;
    public miningPower: number = 1;

    constructor(name: string)
    {
        this.name = name;
        this.spritePath = `assets/sprites/ui/tools/${name}.png`;
        
    }

    private static add(n: string, miningPower: number) :Tool
    {
        let tool = new Tool(n);
        tool.miningPower = miningPower;

        return tool;
    }

    public updateCursor() :void
    {
        coalButton.style.cursor = `url(../${this.spritePath}), auto`;
    }

    public static hand: Tool = this.add("hand", 1);
    public static pickaxe: Tool = this.add("pickaxe", 5);
}