var modal = document.getElementById('show-my-interests');

// Get the button that opens the modal
var btn = document.getElementById("interest");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	$('body').css('overflow','hidden')
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	$('body').css('overflow','scroll')
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    	$('body').css('overflow','scroll')
        modal.style.display = "none";
    }
}