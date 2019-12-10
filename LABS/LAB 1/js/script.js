var container = document.getElementById("container");
var body = document.getElementsByClassName("bgc")[0];

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById(	"btn3");

var colors = ["green", "red", "blue"];

for (var i = 1; i <= 3; i++) {
	var createButtons = document.createElement("BUTTON");
	createButtons.innerHTML = "Button " + i;
	createButtons.id = "btn" + i;
	createButtons.style.padding = "20px";
	createButtons.style.width = "120px";
	createButtons.style.margin = "0px 5px 0px 5px";
	createButtons.style.backgroundColor = colors[i-1];
	createButtons.style.border = "none";
	container.appendChild(createButtons);
	document.getElementById("btn" + i).onclick = change_bgColor;
}

function change_bgColor() {
	body.style.backgroundColor = this.style.backgroundColor;
}