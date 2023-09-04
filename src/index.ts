import './style.css';
import * as logic from './logic'

  document.body.appendChild(loadGrid());
  loadGrid();

  function loadGrid() 
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
        element.addEventListener("click", function() {logic.itemClicked(element.id)});
    });

    return parentDiv;
}
