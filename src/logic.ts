import $ from "jquery";
import * as index from "./index"

export function itemClicked(elementid: string)
{
    let elementToAppend=elementid;
    let row=elementToAppend[0];
    let column=elementToAppend[1];

    if (!Memory.AllMoves.includes([5]+column)) 
    {
        elementToAppend = [5]+column
    }

    for (let i = 5; i >= 0; i--) 
    {
        if (!Memory.AllMoves.includes([i]+column)) 
        {
            elementToAppend = [i]+column
            break;
        }
    }

    if (Memory.AllMoves.includes(elementToAppend)) return;


    var isYellow: boolean = isYellowTurn(Memory.AllMoves.length)
    if (isYellow) {
    AppendElement(elementToAppend, true);
    Memory.YellowMoves.push(elementToAppend);
    }
    else {
    AppendElement(elementToAppend, false)
    Memory.RedMoves.push(elementToAppend);
    }

    Memory.AllMoves.push(elementToAppend);
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
    static AllMoves: string[] = [];

    static YellowMoves: string[] = [];

    static RedMoves: string[] = [];
}

function CheckVictoryConditions(moves: string[]): boolean 
{
    var rows: string = moves.map(x => x[0]).sort().join();
    var columns: string = moves.map(x => x[1]).sort().join();

    var straightVictoryCriteria: string[] = ["0123", "1234", "2345", "3456"];

    straightVictoryCriteria.forEach(criterium => {
        if (rows.includes(criterium)) return true;
        if (columns.includes(criterium)) return true;
    });

    return false;
}

function CalculateDiagonalVictoryConditions() : string[]
{
    let result: string[] = [];
    RightDown(result);

    return result;
}

function RightDown(result: string[]) 
{
    for (var i=0; i<4; i++) 
    {
        for(var j=0; j<4;j++) 
        {
            result.push(`${j}${j + i}$`);
            //TODO: 
            //The output should be an array of classes or arrays.
            //the arrays will need to go up to 6 in value but can be only up to 4 in length
            //Remember - you need to call the victory conditions method
        }
    }
}