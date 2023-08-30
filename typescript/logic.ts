export class GameMemory 
{
    turn: number = 0;

    increment() 
    {
        var x = this.turn++
        console.log(x);
        return x;
    }
}

export default function RunGame() 
{
    function appendCircle(elementId: string) 
{
    let ele = $(`#${elementId}`)[0]
    let svg = ele.appendChild(document.createElement("svg"))
    svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="95" height="97"><circle cx="50" cy="50" r="40" fill="yellow" /></svg>';   
}

}