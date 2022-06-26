
     
     // Create a new list item when clicking on the "Add" button
     function newElement() {
       var li = document.createElement("button");
       li.className = "square";
        li.setAttribute("style", "/recipeStyle.css");
       
       
       var inputValue = document.getElementById("myInput").value;
       var t = document.createTextNode(inputValue);
       li.appendChild(t);
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         document.getElementById("myUL").appendChild(li);
       }
       document.getElementById("myInput").value = "";
       var span = document.createElement("SPAN");
       var txt = document.createTextNode("\u00D7");
       span.className = "close";
       span.appendChild(txt);
       
     
       for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
           var div = this.parentElement;
           div.style.display = "none";
         }
       }
     }