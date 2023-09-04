import $ from "jquery";
import * as index from "./index"

export function itemClicked(elementid: string)
{
    let elementToAppend=elementid;
    let row=elementToAppend[0];
    let column=elementToAppend[1];

    if (!Memory.Moves.includes([5]+column)) 
    {
        elementToAppend = [5]+column
    }

    for (let i = 5; i >= 0; i--) 
    {
        if (!Memory.Moves.includes([i]+column)) 
        {
            elementToAppend = [i]+column
            break;
        }
    }

    if (Memory.Moves.includes(elementToAppend)) return;

    if (isYellowTurn(Memory.Moves.length)) 
    AppendElement(elementToAppend, true);
    else
    AppendElement(elementToAppend, false)

    Memory.Moves.push(elementToAppend);
}

export function loadGrid() 
{
    const parentDiv = document.createElement("div");
    const table = document.createElement("table");

    parentDiv.appendChild(table)
    parentDiv.setAttribute("class", "inner");

    for (let i = 0; i <=5; i++) 
    {
        var tbody = table.appendChild(document.createElement("tbody"));
        var tr = tbody.appendChild(document.createElement("tr"));

        for (let j = 0; j <=6; j++) 
        {
            var td = tr.appendChild(document.createElement("td"))
            td.setAttribute("id", `${i}${j}`)
        }
    }

    const tds = document.querySelectorAll("td");
    tds?.forEach(element => {
        element.addEventListener("click", function() {itemClicked(element.id)});
    });

    return parentDiv;
}

function AppendElement(elementid: string, isYellow: boolean) 
{
    let ele = $(`#${elementid}`)[0]
    let svg = ele.appendChild(document.createElement("svg"))

    if (isYellow) 
    return svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="95" height="97"><circle cx="50" cy="50" r="40" fill="#FAF6A2" /></svg>';   

    else
    return svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="95" height="97"><circle cx="50" cy="50" r="40" fill="#FF78A3" /></svg>';
}

function isYellowTurn(totalMoves: number) : boolean 
{
    if (totalMoves % 2 == 0) return true

    return false
}

class Memory 
{
    static Moves: string[] = [];
}