var container = document.getElementById("container");

var ids = ["chosenWord", "yourInput", "submit"];
var inputTexts = ["Word", "My answer", ""];

var amountOfRows = 1;

/* This creates the inputs */

function generatePlayBoard() {
	var divMaker = document.createElement("DIV");
	divMaker.id = "inputs";
	container.appendChild(divMaker);

	for (var i = 0; i < ids.length; i++) {
		var inputMaker = document.createElement("INPUT");
		var textMaker = document.createElement("P");

		textMaker.id = "inputText" + (i + 1);
		textMaker.innerHTML = inputTexts[i];

		inputMaker.id = ids[i];
		document.getElementById("inputs").appendChild(textMaker);
		document.getElementById("inputs").appendChild(inputMaker);
	}

	var chosenWord = document.getElementById("chosenWord");

	chosenWord.setAttribute("type", "text");
	chosenWord.setAttribute("value", words[Math.floor(Math.random() * words.length) + 0]);
	chosenWord.setAttribute("disabled", "true");		
	document.getElementById("yourInput").setAttribute("type", "text");
	document.getElementById("yourInput").setAttribute("placeholder", "Your letter has to be entered here");
	document.getElementById("submit").setAttribute("type", "submit");

	/* This will make the white bar on the screen with the 5 divs in it */

	var divMaker = document.createElement("DIV");
	divMaker.id = "word";
	container.appendChild(divMaker);

	makeNewRow();

	document.getElementById("submit").onclick = checkWord;
}

/* Everytime the user tries to guess the word, a new row is created for the next guess. If they have won or lost, it won't */
function makeNewRow() {
	var chosenWordValue = document.getElementById("chosenWord").value.toLowerCase();
	var chosenWordArray = Array.from(chosenWordValue);
	
	console.log(chosenWordArray);

	if (amountOfRows <= 5) {
		var letterDiv = document.createElement("DIV");
		var letters = document.getElementById("letters" + amountOfRows);
		letterDiv.id = "letters" + amountOfRows;
		document.getElementById("word").appendChild(letterDiv);
		letters.style.width = "50%";
		letters.style.margin = "0 auto";
		letters.style.display = "grid";
		letters.style.gridTemplateRows = "auto";
		letters.style.gridTemplateColumns = "auto auto auto auto auto";
		
		for (var i = 1; i <= 5; i++) {
			var letterDivs = document.createElement("DIV");
			letterDivs.classList.add("letter" + i);
			letterDivs.id = "l" + i + "r" + amountOfRows;
			document.getElementById("letters" + amountOfRows).appendChild(letterDivs);			
			if (i === 1) {
				var chosenWordValue = document.getElementById("chosenWord").value.toLowerCase();
				var chosenWordArray = Array.from(chosenWordValue);
				letterDivs.innerHTML = chosenWordArray[0];
			}
		}
		amountOfRows++;
	}
}

/* This function checks if the user has won or lost the game, and if the user won or lost, an alert is shown and stops the game. */
function checkWin() {
	var chosenWordValue = document.getElementById("chosenWord").value.toLowerCase();
	var yourInputValue = document.getElementById("yourInput").value.toLowerCase();

	if (chosenWordValue === yourInputValue) {
		setTimeout(function() {
			alert("You won!! :)");
		}, 10)
	}	

	else if(amountOfRows === 6) {
		setTimeout(function() {
			alert("You lost, try again? :(");
		}, 10)
	}

	else {
		makeNewRow();
	}
}

/* This function compares the words with each other giving it their corresponding color. */
function checkWord() {
		var chosenWordValue = document.getElementById("chosenWord").value.toLowerCase();
		var yourInputValue = document.getElementById("yourInput").value.toLowerCase();

		var chosenWordArray = Array.from(chosenWordValue);
		var yourInputArray = Array.from(yourInputValue);
		
		if (yourInputValue.length < 5 || yourInputValue.length > 5) {
			alert("The word needs to have 5 letters!");
		}
		else {
			for (var f = 0; f < 5; f++) {
				var elem = document.getElementById("l" + (f + 1) + "r" + (amountOfRows - 1));
				elem.innerHTML = yourInputArray[f].toUpperCase();
				elem.style.borderRadius = "0%";

				if (yourInputArray[f] === chosenWordArray[f]) {
					document.getElementById("l" + (f + 1) + "r" + (amountOfRows - 1)).style.backgroundColor = "green";
					chosenWordArray[f] = false;
					yourInputArray[f] = false;
				}
				else {
					document.getElementById("l" + (f + 1) + "r" + (amountOfRows - 1)).style.backgroundColor = "red";
				}

			}

			for (var i = 0; i < yourInputArray.length; i++) {
				var elem = document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1));
				if(yourInputArray[i] != false) {
					var position = chosenWordArray.indexOf(yourInputArray[i]);
					if(position > -1) {
						chosenWordArray[position] = false;
						elem.style.borderRadius = "50%";
						elem.style.backgroundColor = "yellow";
					}
				}
			}
			console.log([chosenWordArray, yourInputArray]);
			checkWin();
			}
		}