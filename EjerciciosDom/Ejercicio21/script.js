let aElement = document.querySelector("a");
let body = document.querySelector("body");

aElement.onmouseover=function(){
	let div = document.createElement("div");
	div.style.setProperty("width", "250px");
	div.style.setProperty("heigth", "250px");
	div.style.setProperty("background-color", "red");
	div.style.setProperty("border", "1px solid black");
	div.style.setProperty("border-radius","15px");
	div.style.setProperty("padding", "10px");
	div.style.setProperty("boxShadow", "10px 5px 5px black");
	div.style.setProperty("position", "absolute");
	div.style.setProperty("top", "0px");
	div.style.setProperty("right", "0px");
	let text = document.createTextNode("La URL de este enlace es "+aElement.href);
	div.appendChild(text);
	body.appendChild(div);
}
aElement.onmouseout = function(){
	let divToRemove = document.querySelector("div");
	body.removeChild(divToRemove);
}
