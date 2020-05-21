// ---------------THIS IS THE MAP/POP-UP-------------------

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// ---------------THIS IS THE INFO/POP-UP-------------------

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ---------------THIS IS THE IMAGES DISPLAY NONE-------------------

var enter1 = document.getElementById("enter1");
enter1.onclick = function() {
  enter1.style.display = "none";
}

var living1 = document.getElementById("living1");
living1.onclick = function() {
  living1.style.display = "none";
}

// var living2 = document.getElementById("living2");
// living2.onclick = function() {
//   living2.style.display = "none";
// }

var bigbed1 = document.getElementById("bigbed1");
bigbed1.onclick = function() {
  bigbed1.style.display = "none";
}

// var bigbed2 = document.getElementById("bigbed2");
// bigbed2.onclick = function() {
//   bigbed2.style.display = "none";
// }
