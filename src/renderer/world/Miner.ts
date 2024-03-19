class Miner
{
    static miners: Miner[] = new Array<Miner>();

    name: string;
    title: string;
    path: string;
    scalledPath: string;

    price: number;
    amount: number;
    power: number;

    constructor(name: string, title: string = name, power = 1)
    {


        this.name = name;
        this.title = title;
        this.path = `../assets/sprites/miners/${name}.png`;
        this.scalledPath = `../assets/sprites/miners/scalled/${name}.png`;
        this.price = linearGrowth(Miner.miners.length);
        this.amount = 0;
        this.power = power;

        Miner.miners.push(this);
    }
}

class MinerItem
{
    miner: Miner;

    constructor(miner: Miner)
    {


        this.miner = miner;
    }
}