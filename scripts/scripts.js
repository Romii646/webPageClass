/*
    Student Name: Aaron Cortina
    File Name: scripts.js
    Date: 04/04/2023
*/

// hidden button for age varifacation
   document.getElementById("hidden").style.display = "none"
   var figElement = document.getElementById("placeholder");
   var imgSource = document.getElementById("image");
   var figCap = document.querySelector("figcaption");
   
// Function to display content
function content() {
  var name = document.getElementById("myName").value;
  var text = document.getElementById("new")
  text.textContent = "Welcome " + name + "!";
  text.style.color = "#c0145f";
  text.style.fontSize = "1em";
}

//function verAge
function verAge() {
	var age = document.getElementById("age").value;
	var vAge = document.getElementById("vAge");
	if (age < 18) {
	  vAge.textContent = "Sorry invalid age"
	  vAge.style.color = "#c0145f";
      vAge.style.fontSize = "1em";	
	}
	else {
	  vAge.textContent = "Valid age!"
	  vAge.style.marginLeft = "220px";
	  vAge.style.color = "blue";
      vAge.style.fontSize = "1em";
	  document.getElementById("hidden").style.display = "block"
	  document.getElementById('hidden').addEventListener("click", pic);
	}
}

//function pic
function pic() {
	imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan coast";
    figElement.style.display = "block";
    figCap.textContent = "Coast of San Juan";
}
 
// function to remove picture
function remove() {
	figElement.style.display = "none";
	figCap.textContent = " ";
}