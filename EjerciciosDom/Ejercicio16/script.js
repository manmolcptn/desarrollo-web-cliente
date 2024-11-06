let timer = 0;

let downloadButton = document.querySelector("input[value=download]");
let loadButton = document.querySelector("input[value=load]");

downloadButton.onclick=function(){
	//Mi funcion
	this.disabled = true;

	timer = setInterval(function(){

		let downloadBar = document.querySelector("meter");
		let value = parseInt(downloadBar.value);
		value++;
		
		if (value > parseInt(downloadBar.max)){
			value = parseInt(downloadBar.min);
			clearInterval(timer);
			downloadButton.disabled=false;
		} 
		downloadBar.value = value;
	}, 300);
	
}

loadButton.onclick=function(){

	this.disabled=true;
	
	timer = setInterval(function(){
		
		let loadBar = document.querySelector("progress");
		let value = parseInt(loadBar.value);
		value++;	
		//Cuidado con valores máximos y mínimos. La barra de progreso no tiene valor mínimo
		//pero la de meter si
		if (value > parseInt(loadBar.max)){
			value = 0;
			clearInterval(timer);
			loadButton.disabled=false;
		}
		loadBar.value=value;
	}, 300);
}
