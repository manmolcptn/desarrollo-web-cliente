let timer = 0;

let downloadButton = document.querySelector("input[value=download]");
let loadButton = document.querySelector("input[value=load]");

downloadButton.onclick=function(){
	//Mi funcion
	timer = setInterval(function(){
		let downloadBar = document.querySelector("meter");
		downloadBar.value+=1;
		downloadBar.value < downloadBar.max ? downloadButton.disabled = true : downloadButton.disabled = false;
		
		if (downloadBar.value >= downloadBar.max){
			downloadBar.value = downloadBar.min;
			clearInterval(timer);
		} 
		
	}, 300);
	//Funcion Estela
	// timer = setInterval(function(){
	// 	let downloadBar = document.querySelector("meter");
	// 	if (downloadBar.value != downloadBar.max){
	// 		downloadBar.value += 1;
	// 	}else{
	// 		downloadBar.value=downloadBar.min;
	// 		clearInterval(timer);
	// 	}
	// }, 300)

	this.disabled = true;
}

loadButton.onclick=function(){
	
	timer = setInterval(function(){
		let loadBar = document.querySelector("progress");
		
		loadBar.value < loadBar.max ? loadButton.disabled = true : loadButton.disabled = false;
		
		if (loadBar.value >= loadBar.max){
			loadBar.value = loadBar.min;
			clearInterval(timer);
		} else{
			loadBar.value+=1;
		}
	}, 300);
}
