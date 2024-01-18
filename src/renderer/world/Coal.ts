class Coal 
{
    public static coals: Coal[];

    path: string;
    scalledPath: string;
    smallerPath: string;

    constructor(name: string)
    {
        this.path = `assets/sprites/coal/${name}.png`;
        this.scalledPath = `assets/sprites/coal/scalled/${name}.png`;
        this.smallerPath = `assets/sprites/coal/smaller/${name}.png`;

        Coal.coals.push(this);
    }
}