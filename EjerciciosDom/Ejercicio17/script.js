let playButton = document.querySelector("input[value=Play]");
let resetButton = document.querySelector("input[value=Reset]");
let timer = 0;
let divs = document.querySelectorAll("div");

playButton.onclick = function () {
	
	timer = setInterval(function () {
		for (let i = 0; i < divs.length; i++) {
			let MOVE = Math.floor(Math.random() * 20 - 5);
			if (MOVE < 0) MOVE -= MOVE;

			let div = divs[i];

			let styles = window.getComputedStyle(div);
			let positionDiv = styles.getPropertyValue("left");
			positionDiv = Number(positionDiv.substring(0, positionDiv.length - 2));

			if (positionDiv + div.offsetWidth + MOVE <= window.innerWidth) {
				div.style.setProperty("left", positionDiv + MOVE + "px");
			} else {
				clearInterval(timer);
				resetButton.disabled = false;
			}
			
		}
	}, 100);
}

resetButton.onclick = function(){
	for (let i = 0; i < divs.length; i++) {
		let div = divs[i];
		div.style.setProperty("left", "0px");
	}
	resetButton.disabled = true;
}
