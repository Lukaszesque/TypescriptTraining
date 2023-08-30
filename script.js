"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.onload = function loadEvents() {
    loadGrid();
    //RunGame();
};
function loadGrid() {
    var parentDiv = document.querySelector(".inner");
    var table = document.createElement("table");
    parentDiv === null || parentDiv === void 0 ? void 0 : parentDiv.appendChild(table);
    for (var i = 0; i <= 5; i++) {
        var tbody = table.appendChild(document.createElement("tbody"));
        var tr = tbody.appendChild(document.createElement("tr"));
        for (var j = 0; j <= 6; j++) {
            var td = tr.appendChild(document.createElement("td"));
            td.setAttribute("id", "".concat(i).concat(j));
        }
    }
    var tds = document.querySelectorAll("td");
    tds === null || tds === void 0 ? void 0 : tds.forEach(function (element) {
        element.setAttribute("onclick", "appendCircle('".concat(element.id, "')"));
    });
}
