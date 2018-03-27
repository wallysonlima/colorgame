var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
	];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// initial colors to square
	squares[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function() {
	
	// grab color of clicked square
	var clickedColor = this.style.backgroundColor;

	// compare color to pickedColor
	if (clickedColor === pickedColor) {
		alert("Correct !");
	}
	else {
		alert("Wrong !!!");
	}

	});
}

