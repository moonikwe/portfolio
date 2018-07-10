var intmodal = document.getElementById('show-my-interests');
var projmodal = document.getElementById('show-my-projects');
// Get the button that opens the modal
var intbtn = document.getElementById("interests");
var projbtn = document.getElementById("projects");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
intbtn.onclick = function() {
	$('body').css('overflow','hidden')
    intmodal.style.display = "block";
}
projbtn.onclick = function() {
	$('body').css('overflow','hidden')
    intmodal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	$('body').css('overflow','scroll')
    intmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == intmodal) {
    	$('body').css('overflow','scroll')
        intmodal.style.display = "none";
    }
}