var header, resetBtn, message, squares, colorDisplay, colors, pickedColor;

// dom selections
header = document.querySelector('h1');
resetBtn = document.getElementById('reset');
message = document.getElementById('message');
squares = document.querySelectorAll('.square');
colorDisplay = document.getElementById('colorDisplay');

resetBtn.addEventListener('click', function() {
	header.style.backgroundColor = '#232323';
	resetBtn.textContent = 'New Colors';
	colors = generateRandomColors(6);
	pickedColor = randomColor();
	colorDisplay.textContent = pickedColor;
	
	for (var i = 0; i < squares.length; i++) {
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
});

colors = generateRandomColors(6);
pickedColor = randomColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	
	// add event listener to squares
	squares[i].addEventListener('click', function() {
		var clickedColor = this.style.backgroundColor;
		
		if (clickedColor === pickedColor) {
			header.style.backgroundColor = pickedColor;
			message.textContent = "Correct";
			resetBtn.textContent = "Play Again";
			
			changeColors(clickedColor);
		} else {
			message.textContent = "Try Again";

			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function randomColor() {
	var randomNumber = Math.round(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColors(noOfSquares) {
	var colorsArray = [];
	
	for (var i = 0; i < noOfSquares; i++) {
		colorsArray.push(randomCol());
	}
	
	return colorsArray;
}

function randomCol() {
	var r = Math.round(Math.random() * 255);
	var g = Math.round(Math.random() * 255);
	var b = Math.round(Math.random() * 255);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}