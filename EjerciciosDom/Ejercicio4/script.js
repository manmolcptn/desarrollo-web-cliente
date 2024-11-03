let button = document.querySelectorAll("input[type=button]");
let imgs = [
	"./fotos/foto1.jpg",
	"./fotos/foto2.jpg",
	"./fotos/foto3.jpg",
	"./fotos/foto4.jpg",
	"./fotos/foto5.jpg"
];
let img = document.getElementById("fotos");
let i = 0;
//Forma de declarar eventos 
button[0].onclick = function() {
	if (i > 0) {
		i--;
		img.setAttribute("src", imgs[i]);
	}
}

button[1].onclick = function() {
	if (i < imgs.length - 1) {
		i++;
		img.setAttribute("src", imgs[i]);
	}
	i === imgs.length-1 ? button[1].setAttribute("disabled", "disabled") : button[1].removeAttribute("disabled");
	
}
