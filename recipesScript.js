let image;

let posts;
let postImages;

//basicButton is a "template" to cloneNode() and create new posts from user input
const basicButton = document.createElement("button"),
  img = document.createElement("img"),
  title = document.createElement("p"),
  credit = document.createElement("p");

basicButton.className = "square";
basicButton.setAttribute("style", "/style.css");

img.className = "recipe-image";
img.setAttribute("style", "/style.css");

title.className = "recipe-title";
title.setAttribute("style", "/style.css");

credit.className = "recipe-credit";
credit.setAttribute("style", "/style.css");

basicButton.appendChild(img);
basicButton.appendChild(title);
basicButton.appendChild(credit);

//get postImages list
if (JSON.parse(localStorage.getItem('postImages')) == null){
  postImages = [];
} else {
  postImages = JSON.parse(localStorage.getItem('postImages'));
}


//creating stored posts and adding to document
if (JSON.parse(localStorage.getItem('posts')) == null){
  posts = [];
} else {
  posts = JSON.parse(localStorage.getItem('posts'));
  posts.forEach(post =>{
    let li = basicButton.cloneNode(true);
    /* let postImage = document.createElement('img');
    postImage.className = "recipe-image";
    postImage.setAttribute("style", "/style.css");
    li.childNodes[0] = postImage; */

    li.childNodes[1].textContent = post[0];
    li.childNodes[2].textContent = post[1];

    li.addEventListener("click", function () {
      window.open(post[2]);
    });
    
    document.getElementById("myUL").appendChild(li);
    
  });
}

//code for when an image is loaded (displays the image, adds image to template for when it's copied)
let loadFile = function (event) {
  img.className = "recipe-image";
  img.setAttribute("style", "/style.css");
  img.src = URL.createObjectURL(event.target.files[0]);
  
  //displays the image
  image = document.getElementById('output');
  image.src = img.src;

};

// Create a new post when clicking on the "Add Recipe" button
function newElement() {
  let li = basicButton.cloneNode(true);

  let titleInput = document.getElementById("titleInput").value;
  let creditInput = document.getElementById("creditInput").value;
  let imgInput = document.getElementById("file");

  li.childNodes[0] = imgInput;
  li.childNodes[1].textContent = titleInput;
  li.childNodes[2].textContent = creditInput;

  posts.push([titleInput, creditInput, document.getElementById('linkInput').value]);

  li.addEventListener("click", function () {
    window.open(document.getElementById("linkInput").value);
  });

  

  if (titleInput === "" || creditInput === "" || linkInput.value === "") {
    alert("You must fill in all blanks!");
  } else {

    try {
      url = new URL(linkInput.value);
      document.getElementById("myUL").appendChild(li);
      localStorage.setItem('posts', JSON.stringify(posts));
    } catch (_) {
      alert("Link is not valid!");  
    }

    
  }
  
}