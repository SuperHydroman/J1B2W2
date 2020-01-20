var container = document.getElementById("container");

var ids = ["chosenWord", "yourInput", "submit"];
var inputTexts = ["Word", "My answer", ""];
// var words = ["Kaart", "Chest", "Ratje"];

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
	chosenWord.setAttribute("value", words[Math.floor((Math.random() * words.length) + 0)]);
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

function makeNewRow() {
	var chosenWordValue = document.getElementById("chosenWord").value.toLowerCase();
	var chosenWordArray = Array.from(chosenWordValue);
	
	console.log(chosenWordArray);

	if (amountOfRows <= 5) {
		var letterDiv = document.createElement("DIV");
		letterDiv.id = "letters" + amountOfRows;
		document.getElementById("word").appendChild(letterDiv);
		document.getElementById("letters" + amountOfRows).style.width = "50%";
		document.getElementById("letters" + amountOfRows).style.margin = "0 auto";
		document.getElementById("letters" + amountOfRows).style.display = "grid";
		document.getElementById("letters" + amountOfRows).style.gridTemplateRows = "auto";
		document.getElementById("letters" + amountOfRows).style.gridTemplateColumns = "auto auto auto auto auto";
		
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
				document.getElementById("l" + (f + 1) + "r" + (amountOfRows - 1)).innerHTML = yourInputArray[f].toUpperCase();
			}


			for (var i = 0; i < 5; i++) {
				console.log(i);
				for (var e = 0; e < 5; e++) {

					if (yourInputArray[i] === chosenWordArray[e]) {
						document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.borderRadius = "0%";
						document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.backgroundColor = "green";
					}

					else if (yourInputArray[i] != chosenWordArray[e]) {
						if (document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.backgroundColor != "green") {
							document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.borderRadius = "0%";
							document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.backgroundColor = "red";
						}
						else {}
					}
				}

				if (document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.backgroundColor === "green" && yourInputArray[i] != chosenWordArray[i]) {
					document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.borderRadius = "50%";
					document.getElementById("l" + (i + 1) + "r" + (amountOfRows - 1)).style.backgroundColor = "yellow";
				}
			}
			checkWin();
			}
		}