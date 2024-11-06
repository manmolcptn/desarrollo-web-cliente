let addButton = document.querySelector("input");

addButton.onclick = function () {
	let ul = document.querySelector("ul");
	let li = document.createElement("li");
	let userContent = document.createTextNode(prompt("Introduce whatever u want:"));

	li.appendChild(userContent);
	//Introduce el elemento antes de otro elemento ya existente
	ul.insertBefore(li, addButton);


}
