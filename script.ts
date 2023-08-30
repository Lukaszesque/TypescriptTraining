import RunGame from "./typescript/logic";

window.onload = function loadEvents() 
{
    loadGrid();
    //RunGame();
};

function loadGrid() 
{
    const parentDiv = document.querySelector(".inner");
    const table = document.createElement("table")

    parentDiv?.appendChild(table)

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
        element.setAttribute("onclick", `appendCircle('${element.id}')`);
    });
}