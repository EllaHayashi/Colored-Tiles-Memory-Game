var isClicked = false; //if there is already another square picked
var numberOfSquares = 12;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
//var squares2 = document.querySelectAll(".square");
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

	}

});




for(var i = 0; i<squares.length; i++){

//	squares[i].style.backgroundColor = colors[i];	
	squares[i].addEventListener("click",function(){
		var colorNum = 0;
		for (var z = 0; z<squares.length; z++){
			if(squares[z]===this)
			{
				colorNum = z;
			}
		}
	this.style.backgroundColor = colors[colorNum];
	var clicked = this.style.backgroundColor;
//	alert(colors[i]);
	
		if(isClicked)
		{

			if(clicked !== "rgb(35, 35, 35)"){
				var squareNum = 0;
				for(var x = 0; x<squares.length; x++){

					if(squares[x].classList.contains("tileSelected"))
					{
						squareNum = x;
					}
				}
				squares[squareNum].style.backgroundColor = colors[squareNum];
/*				setTimeout(function(){

				}, 10000);*/

				if(colors[squareNum]===clicked)
//				if(squares[squareNum].style.backgroundColor===clicked)
				{
					this.style.backgroundColor = "rgb(35, 35, 35)";
					squares[squareNum].style.backgroundColor = "rgb(35, 35, 35)";
				}
				else
				{

					this.style.backgroundColor = "rgb(250, 250, 250)";
					squares[squareNum].style.backgroundColor = "rgb(250, 250, 250)";
				}	
				this.classList.remove("tileSelected");
				squares[squareNum].classList.remove("tileSelected");
				isClicked = false;
			}
		}
		else{

			if(clicked!=="rgb(35, 35, 35)")
			{
				this.classList.add("tileSelected");
				isClicked = true;
			}

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



