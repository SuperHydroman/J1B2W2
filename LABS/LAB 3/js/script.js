var container = document.getElementById("container");

var ids = ["chosenWord", "yourInput", "submit"];
var inputTexts = ["Word", "My answer", ""];
var words = ["Kaart", "Chest", "Ratje"];

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

	var letterDiv = document.createElement("DIV");
	letterDiv.id = "letters";
	document.getElementById("word").appendChild(letterDiv);

	for (var i = 1; i <= 5; i++) {
		var letterDivs = document.createElement("DIV");
		letterDivs.id = "letter" + i;
		document.getElementById("letters").appendChild(letterDivs);
	}
	document.getElementById("submit").onclick = checkWord;
}


function checkWord() {
var chosenWordValue = document.getElementById("chosenWord").value.toLowerCase();
var yourInputValue = document.getElementById("yourInput").value.toLowerCase();

var chosenWordArray = Array.from(chosenWordValue);
var yourInputArray = Array.from(yourInputValue);
	
	console.log(chosenWordArray);
	console.log(yourInputArray);

	for (var f = 0; f < 5; f++) {
		document.getElementById("letter" + (f + 1)).innerHTML = yourInputArray[f].toUpperCase();
	}

	for (var i = 0; i < 5; i++) {
		console.log(i);
		for (var e = 0; e < 5; e++) {

			if (yourInputArray[i] === chosenWordArray[e]) {
				document.getElementById("letter" + (i+1)).style.borderRadius = "0%";
				document.getElementById("letter" + (i+1)).style.backgroundColor = "green";
			}

			else if (yourInputArray[i] != chosenWordArray[e]) {
				if (document.getElementById("letter" + (i+1)).style.backgroundColor != "green") {
					document.getElementById("letter" + (i+1)).style.borderRadius = "0%";
					document.getElementById("letter" + (i+1)).style.backgroundColor = "red";
				}
				else {}
			}
		}

		if (document.getElementById("letter" + (i+1)).style.backgroundColor === "green" && yourInputArray[i] != chosenWordArray[i]) {
			document.getElementById("letter" + (i+1)).style.borderRadius = "50%";
			document.getElementById("letter" + (i+1)).style.backgroundColor = "yellow";
		}
	}
}