let timer = 0;

let downloadButton = document.querySelector("input[value=download]");
let loadButton = document.querySelector("input[value=load]");

downloadButton.onclick=function(){
	// let i = 0;
	// timer = setInterval(function(){
	// 	let downloadBar = document.querySelector("meter");
	// 	downloadBar.value=i;
	// 	downloadBar.value < downloadBar.max ? downloadButton.disabled = true : downloadButton.disabled = false;
	// 	i++;
	// 	if (downloadBar.value >= downloadBar.max){
	// 		downloadBar.value = 0;
	// 		clearInterval(timer);
	// 	} 
		
	// }, 300);

	timer = setInterval(function(){
		let downloadBar = document.querySelector("meter");
		if (downloadBar.value != downloadBar.max){
			downloadBar.value += 1;
		}else{
			downloadBar.value=downloadBar.min;
			clearInterval(timer);
		}
	}, 300)

	this.disabled = true;
}

loadButton.onclick=function(){
	let i = 0;

	timer = setInterval(function(){
		let loadBar = document.querySelector("progress");
		i++;
		loadBar.value=i;
		loadBar.value < loadBar.max ? loadButton.disabled = true : loadButton.disabled = false;

		if (loadBar.value >= loadBar.max){
			loadBar.value = 0;
			clearInterval(timer);
		} 
	}, 300);
}
