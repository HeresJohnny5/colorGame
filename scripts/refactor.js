var colors, numOfSquares, pickedColor, header, colorDisplay, resetBtn, message, modeBtns, squares;

// custom variables
colors = [];
numOfSquares = 6;
pickedColor;

// dom selections
header = document.querySelector('h1');
colorDisplay = document.getElementById('colorDisplay');
resetBtn = document.getElementById('reset');
message = document.getElementById('message');
modeBtns = document.querySelectorAll('.mode');
squares = document.querySelectorAll('.square');

init();

function init() {
	// modeBtns event listeners
	modeBtnListeners();
	// 
	setUpSquares();
	//
	reset();
}

function modeBtnListeners() {
	for(var i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener('click', function(){
			modeBtns[0].classList.remove('selected');
			modeBtns[1].classList.remove('selected');
			this.classList.add('selected');

			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		});
	}
}

function reset() {		
	header.style.backgroundColor = 'steelblue';
	resetBtn.textContent = "New Colors";
	message.textContent = "";
		
	colors = generateRandomColors(numOfSquares);
	pickedColor = randomColor();	
	colorDisplay.textContent = pickedColor;
		
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];	
		} else {
			squares[i].style.display = 'none';
		}
	}
}

function generateRandomColors(noOfSquares){
	var colorsArray = [];
	
	for(var i = 0; i < noOfSquares; i++){
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

function randomColor(){
	var randomNumber = Math.round(Math.random() * colors.length);
	return colors[randomNumber];
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++){	
		// add event listener to squares
		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
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
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

resetBtn.addEventListener('click', function(){
	reset();
});