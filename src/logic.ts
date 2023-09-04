import $ from "jquery";

export function itemClicked(elementid: string)
{
    console.log(elementid);

    let ele = $(`#${elementid}`)[0]
    let svg = ele.appendChild(document.createElement("svg"))
    svg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="95" height="97"><circle cx="50" cy="50" r="40" fill="yellow" /></svg>';   
}