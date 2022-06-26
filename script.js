/*const square = document.createElement("div");
square.appendChild(document.getElementsByClassName("square"));
const element = document.getElementsByClassName("squares");

element.appendChild(square);*/

/*var original = document.getElementById("squareID");
var clone = original.cloneNode(true);
clone.removeAttribute("id");
document.getElementById("squareID").appendChild(clone);

function createSquare(){
    const div = document.createElement("div");
    div.setAttribute("class", "square");
   
    const currentDiv = document.getElementById("squareID");
    document.body.insertBefore(newDiv, div);

    
} */

document.getElementById('reason1').addEventListener("click", function(){
    window.localStorage.setItem('key', 'value')
});

