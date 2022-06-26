  
    let image;
    
 
    
    
    const basicButton = document.createElement("button")
     
     ,  img = document.createElement('img')
     ,  title = document.createElement('p')
     ,  credit = document.createElement('p') 
     ;

     basicButton.className = "square";
      basicButton.setAttribute("style", "/style.css");

      img.className = 'recipe-image';
      img.setAttribute("style", "/style.css");
    
     title.className = "recipe-title";
     title.setAttribute("style", "/style.css");
     
     credit.className = "recipe-credit";
     credit.setAttribute("style", "/style.css");

     var loadFile = function(event) {
      image = document.getElementById('output');
      image.src = URL.createObjectURL(event.target.files[0]);
      img.className = 'recipe-image';
      img.setAttribute("style", "/style.css");
      img.src = URL.createObjectURL(event.target.files[0]);
      basicButton.appendChild(img);
      basicButton.appendChild(title);
     basicButton.appendChild(credit);
  };
     
     basicButton.appendChild(img);
     basicButton.appendChild(title);
     basicButton.appendChild(credit);

    
     
     // Create a new list item when clicking on the "Add" button
     function newElement() {
       
        var li = basicButton.cloneNode(true);
       
       
        
       
       
       var titleInput = document.getElementById("titleInput").value;
       let creditInput = document.getElementById("creditInput").value;
       let imgInput = document.getElementById("myFile");
      
       
        li.childNodes[0] = imgInput;
       li.childNodes[1].textContent = titleInput;
        li.childNodes[2].textContent = creditInput;


        li.addEventListener("click", function(){
            window.open(document.getElementById("linkInput").value);
        });
        
        
       
       var t = document.createTextNode(titleInput);
       title.textContent = titleInput;
       credit.tetContent = titleInput;
       
       
       

       if (titleInput === '' || creditInput === ''|| linkInput === '') {
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



     

