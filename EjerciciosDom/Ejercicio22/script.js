let img = document.querySelector("img");
let divImg = document.createElement("div")
let background = document.createElement("div");

img.onclick = function () {
	background.setAttribute("style",`
		background-color: grey;
		opacity: 0.5;
		width: ${window.innerWidth};
		height:${window.innerHeight};
		top: 0;
		position:fixed; `);

	
	divImg.setAttribute("style",`
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%; `);

	this.setAttribute("style",`
		width: 1280px;
		position: relative;
		height: 720px;
		z-index: 2;
		margin: 0 auto;`);
	
	let body = img.parentNode;
	divImg.appendChild(img);

	body.appendChild(divImg);
	body.appendChild(background);
}

div.onclick = function () {

	// div.style.setProperty("width","0px");
	// div.style.setProperty("height", "0px");
}
