using System;
using System.Collections.Generic;
using UnityEngine;

public class Coal
{
    public static List<Coal> coals = new();

    int amount = 0;
    readonly int hardness = 10;
    int health;

    readonly string name;
    readonly string path;

    public Coal(string name)
    {
        this.name = name;
        path = "Sprites/Coal/" + name;

        coals.Add(this);
    }

    public void Excavate()
    {
        //health -= Player.currecntTool.power;
        if (health <= 0)
        {
            amount++;
            health = hardness;
        } 
    }

    public static Coal betterCoal = new("better-coal");
}
