window.onload= function(){
	let img = document.getElementsByTagName("img")[0];

	img.onmouseover = function () {
		this.src = "./img/balde.jpeg";
	}

	img.onmouseout = function () {
		this.src = "./img/lamine.png";
	}

}
