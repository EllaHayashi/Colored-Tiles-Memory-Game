var isClicked = false; //if there is already another square picked
var numberOfSquares = 12;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var mainColor = pickedColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//var lastClickedColor = squares[0].style.backgroundColor;

//If the easy mode is activated
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	mainColor = pickedColor();

	for(var i = 0; i<squares.length; i++)
	{
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

//If the hard mode is activated
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	mainColor = pickedColor();
	for(var i = 0; i<squares.length; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

});


for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];	

	squares[i].addEventListener("click",function(){
		var clicked = this.style.backgroundColor;
		var squareNum = 0;

		if(isClicked)
		{
			for(var i = 0; i<squares.length; i++){

				if(squares[i].classList.contains("tileSelected"))
				{
					squareNum = i;
				}
			}

			if(squares[squareNum].style.backgroundColor===clicked)
			{
				this.style.backgroundColor = "#232323";
				squares[squareNum].style.backgroundColor = "#232323";
			}
			else
			{

			}
			this.classList.remove("tileSelected");
			squares[squareNum].classList.remove("tileSelected");
//			lastClicked.classList.remove("tileSelected");
			isClicked = false;
/*			if(clicked === mainColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
*/
		}
		else{
			this.classList.add("tileSelected");
			isClicked = true;

		}

	});
}


//reset the new colors and new array
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numberOfSquares);
	mainColor = pickedColor();
	//colorDisplay.textContent = mainColor;
	for(var i = 0; i<squares.length; i ++){
		squares[i].style.backgroundColor = colors[i];
	
	}
	resetButton.textContent = "New Colors";

});


function changeColors(color){
	for(var i = 0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}


}

//picks a color from an array
function pickedColor(){
	var random = Math.floor(Math.random() * colors.length); //choose one of the six colors
	return colors[random];
}

//generates an array of random colors
function generateRandomColors(num){
	var array = []
	for(var i = 0; i<num; i++){
		var randoCol = randomColor();
		array.push(randoCol);
		array.push(randoCol);

	}
	shuffle(array);
	return array;

}

//generates a random color
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//shuffles array randomly
function shuffle(array){
	var count = array.length;

	while(count>0){
		var index = Math.floor(Math.random()*count);
		count--;
		var temp = array[count];
		array[count] = array[index];
		array[index] = temp;
	}
return array;
}



