var container = document.getElementById("container");

var startNumber = 0;

var buttonCounter = {};

var amountOfNumbers = 30;

var colors = ["red", "purple", "blue", "black"];

for (var i = 1; i <= amountOfNumbers; i++) {
	var createButtons = document.createElement("BUTTON");
	createButtons.innerHTML = i;
	container.appendChild(createButtons);
	createButtons.id = "btn" + i;
	createButtons.style.width= "150px";
	createButtons.style.height= "70px";
	createButtons.style.fontSize = "200%";
	createButtons.style.backgroundColor = "green";
	createButtons.style.border = "none";
	createButtons.style.margin = "5px";
	buttonCounter["btn" + i] = 0;
	document.getElementById("btn" + i).onclick = test;
}

function test() {
	buttonCounter[this.id]++;
	if (buttonCounter[this.id] == 1) {
		this.style.backgroundColor = colors[0];
	}
	else if (buttonCounter[this.id] == 2) {
		this.style.backgroundColor = colors[1];
	}
	else if (buttonCounter[this.id] == 3) {
		this.style.backgroundColor = colors[2];
	}
	else if (buttonCounter[this.id] == 4) {
		this.style.backgroundColor = colors[3];
		this.style.color = "white";
	}
	else if (buttonCounter[this.id] > colors.length) {
		var test = document.getElementById(this.id);
		test.parentNode.removeChild(test);
	}
}