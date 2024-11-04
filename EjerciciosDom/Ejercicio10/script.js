let body = document.getElementsByTagName("body")[0];
const COLORS = [
	"red", "blue", "purple"
];

for(let i = 0; i < 3; i++){
	let div = document.createElement("div");
	div.setAttribute("class", `div${i}`);
	div.style.width= "100px";
	div.style.height= "100px";
	div.style.backgroundColor = COLORS[i];
	div.onmouseover = function(){
		body.style.backgroundColor = div.style.backgroundColor;
	}
	body.appendChild(div);
}
