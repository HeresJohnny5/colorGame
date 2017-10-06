var squares, colorDisplay, header, colors, backgroundColor, pickedColor;

// dom selection
squares = document.querySelectorAll('.square');
colorDisplay = document.getElementById('colorDisplay');
header = document.querySelector('h1');

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
		} else {
			this.style.backgroundColor = backgroundColor;
		}
	});
}