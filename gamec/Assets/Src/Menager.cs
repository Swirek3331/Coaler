using System;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class Menager : MonoBehaviour
{
    public TextMeshProUGUI coalLabel;

    public int coalAmount = 0;

    public void AddCoal()
    {
        coalAmount++;
        Debug.Log("Coal amount: " + coalAmount);
        coalLabel.text = coalAmount.ToString();
    }

    public void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            AddCoal();
        }
    }
}
