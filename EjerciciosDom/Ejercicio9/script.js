window.onload = function () {
	let p1 = document.getElementsByTagName("p")[0];
	let p2 = document.getElementsByTagName("p")[1];

	let p1Style =
		"background-color: yellow; border: 1px solid black; border-radius: 15px; padding: 10px;";
	let p2Style =
		"background-color: red; border: 2px solid black; border-radius: 5px; padding: 10px;";

	p1.style = p1Style;
	p2.style = p2Style;

	let p1Bg = p1.style.backgroundColor; //yellow
	let p2Bg = p2.style.backgroundColor; //red

	p1.onclick = function () {
		p1Bg === "yellow" ? this.style = p2Style : this.style = p1Style;
		p1Bg = p1.style.backgroundColor;

	}

	p2.onclick = function () {
		p2Bg === "red" ? this.style = p1Style : this.style = p2Style;
		p2Bg = p2.style.backgroundColor;

	}
}
