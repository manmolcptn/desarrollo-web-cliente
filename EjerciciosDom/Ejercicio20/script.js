let div = document.querySelector("div");
let generateButton = document.querySelector("input[value=Generate]");
let removeOldButton = document.querySelector("input[value='Remove Old']");
let removeNewsButton = document.querySelector("input[value='Remove News']");
let replaceButton = document.querySelector("input[value='Replace']");

generateButton.onclick = function(){
	let newP = document.createElement("p");
	newP.setAttribute("class", "class2");
	let text = document.createTextNode(div.children[0].textContent);
	newP.appendChild(text);
	div.appendChild(newP);
	removeNewsButton.disabled=false;
}

removeOldButton.onclick = function(){
	let firstP = div.children[0];
	div.removeChild(firstP);
	this.disabled=true;
	replaceButton.disabled=true;
}

removeNewsButton.onclick = function(){
	//Mejorar para que solo elimine los párrafo con la clase2
	for (let i = 0; i < div.children.length; i++) {
		let pToRemove = div.children[1];
		div.removeChild(pToRemove);
	}
}

replaceButton.onclick = function(){
	let table = document.createElement("table");
	
	for (let i = 0; i < 2; i++) {
		let tr = document.createElement("tr");
		let td = document.createElement("td");
		let td2 = document.createElement("td");
		let text = document.createTextNode("1");
		let text2 = document.createTextNode("1");

		td.appendChild(text);
		td2.appendChild(text2);
		tr.appendChild(td);
		tr.appendChild(td2);
		table.appendChild(tr);
	};

	div.replaceChild(table, div.children[0]);
}
