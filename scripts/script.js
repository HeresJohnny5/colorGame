var header, message, squares, colorDisplay, colors, backgroundColor, pickedColor;

// dom selection
header = document.querySelector('h1');
message = document.getElementById('message');
squares = document.querySelectorAll('.square');
colorDisplay = document.getElementById('colorDisplay');

colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

backgroundColor = "#232323";

// hard coded 
pickedColor = colors[3];

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
			
			changeColors(clickedColor);
		} else {
			message.textContent = "Try Again";

			this.style.backgroundColor = backgroundColor;
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}