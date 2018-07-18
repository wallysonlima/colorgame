var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

		reset();
		//figure out how many squares to show
		//pick new colors
		//pick a new pickcolor
		//update page to reflect changes

	});
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if ( colors[i] ) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];	
		} else {
			squares[i].style.display = "none";
		}
		
	}

	h1.style.backgroundColor = "steelblue";
}

/*
easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
*/
resetButton.addEventListener("click", function() {
	reset();
});

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
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}
	else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}

	});
}

function changeColors(color) {
	// loop trough all squares
	for(var i = 0; i < squares.length; i++) {
		// change each color to match given color
		squares[i].style.backgroundColor = color;	
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
		// get random color and push into arr
	}

	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}