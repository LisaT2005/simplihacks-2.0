
     
    
    
    const basicButton = document.createElement("button")
     
     ,  title = document.createElement('p')
     ,  credit = document.createElement('p')
     ,  img = document.createElement('img');
     ;

     basicButton.className = "square";
      basicButton.setAttribute("style", "/recipeStyle.css");

      img.className = 'recipe-image';
      img.setAttribute("style", "/recipeStyle.css");
    
     title.className = "recipe-title";
     title.setAttribute("style", "/recipeStyle.css");
     
     credit.className = "recipe-credit";
     credit.setAttribute("style", "/recipeStyle.css");

     
     basicButton.appendChild(title);
     basicButton.appendChild(credit);
     
     // Create a new list item when clicking on the "Add" button
     function newElement() {
       
        var li = basicButton.cloneNode(true);
       
       
        
       
       
       var titleInput = document.getElementById("titleInput").value;
       let creditInput = document.getElementById("creditInput").value;
      
       
        li.childNodes[0].textContent = titleInput;
        li.childNodes[1].textContent = creditInput;

        li.addEventListener("click", function(){
            window.open(document.getElementById("linkInput").value);
        });
        
        
       
       var t = document.createTextNode(titleInput);
       title.textContent = titleInput;
       credit.tetContent = titleInput;
       
       
       

       if (titleInput === '' || creditInput === '') {
         alert("You must fill in all blanks!");
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