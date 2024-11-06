let timer = 0;
let coinButton = document.querySelector("input[type=button]");
let progressBar = document.querySelector("progress");
let coinCounter = document.querySelector(".coins");

coinButton.onclick=function(){
	this.disabled = true;
	let coinQuantity = parseInt(coinCounter.textContent);

	timer = setInterval(function(){
		let value = parseInt(progressBar.value);
		value++;
		
		if (value > parseInt(progressBar.max)){
			clearInterval(timer);
			coinButton.disabled = false;
			value=0;
			coinQuantity++;
			coinCounter.textContent=coinQuantity;
		}
		progressBar.value = value;
	}, 100);
}
