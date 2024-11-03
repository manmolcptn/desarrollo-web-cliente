window.onload = function(){
	
}

function add(){
	let div = document.getElementById("number");
	let valor = parseInt(div.innerText);
	
	div.innerText = valor+1;
}

function subtract(){
	let div = document.getElementById("number");
	let valor = parseInt(div.innerText);
	
	div.innerText = valor-1;
}
