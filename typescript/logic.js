"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMemory = void 0;
var GameMemory = /** @class */ (function () {
    function GameMemory() {
        this.turn = 0;
    }
    GameMemory.prototype.increment = function () {
        var x = this.turn++;
        console.log(x);
        return x;
    };
    return GameMemory;
}());
exports.GameMemory = GameMemory;
function RunGame() {
    function appendCircle(elementId) {
        var ele = $("#".concat(elementId))[0];
        var svg = ele.appendChild(document.createElement("svg"));
        svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="95" height="97"><circle cx="50" cy="50" r="40" fill="yellow" /></svg>';
    }
}
exports.default = RunGame;
