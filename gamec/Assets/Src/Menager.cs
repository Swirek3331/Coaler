using System;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEditor.SearchService;
using System.ComponentModel;

public class Menager : MonoBehaviour
{
    public TextMeshProUGUI coalLabel;

    public int coalAmount = 0;

    int excavatorAmount = 0;

    public void AddCoal()
    {
        coalAmount++;
        //Debug.Log("Coal amount: " + coalAmount);
        coalLabel.text = coalAmount.ToString();
    }

    public void AddExcavator()
    {
        GameObject excavator = new GameObject("Excavator");

        SpriteRenderer spriteRenderer = excavator.AddComponent<SpriteRenderer>();
        spriteRenderer.sprite = Resources.Load<Sprite>("Sprites/excavator");

        float angle = UnityEngine.Random.Range(0, 360);
        Debug.Log(angle);

        float angleInRadians = angle * Mathf.Deg2Rad;

        excavator.transform.rotation = Quaternion.Euler(0, 0, angle);

        excavator.transform.position = new Vector3(Mathf.Cos(angleInRadians) * 2, Mathf.Sin(angleInRadians) * 2, 0);

        excavatorAmount++;
    }

    public void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            AddCoal();
        }

        coalAmount += excavatorAmount;
        coalLabel.text = coalAmount.ToString();
    }

    public void Start()
    {
        coalLabel.text = coalAmount.ToString();
    }
}
