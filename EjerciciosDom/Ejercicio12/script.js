let img = document.getElementsByTagName("img")[0];
// let leftButton = document.getElementsByTagName("input")[0];
// let rightButton = document.getElementsByTagName("input")[1];
let resetButton = document.getElementsByTagName("input")[0];
//Es mejor manejar los estilos a partir de window.getComputedStyle ya que
//de la otra forma puede darnos problemas.
const MOVE = 30;

// leftButton.onclick = function () {
// 	let styles = window.getComputedStyle(img);
// 	let positionImg = styles.getPropertyValue("left");
// 	positionImg = Number(positionImg.substring(0, positionImg.length - 2));
// 	if (positionImg - MOVE >= 0){
// 		img.style.setProperty("left", positionImg - MOVE + "px");
// 	}
// }

// rightButton.onclick = function () {
// 	let styles = window.getComputedStyle(img);
// 	let positionImg = styles.getPropertyValue("left");
// 	positionImg = Number(positionImg.substring(0, positionImg.length - 2));
// 	if (positionImg + img.offsetWidth + MOVE <= window.innerWidth){
// 		img.style.setProperty("left", positionImg + MOVE + "px");
// 	}
// }

img.onmouseover= function(){
	let styles = window.getComputedStyle(img);
	let positionImg = styles.getPropertyValue("left");
	positionImg = Number(positionImg.substring(0, positionImg.length - 2));
	if (positionImg + img.offsetWidth + MOVE <= window.innerWidth){
		img.style.setProperty("left", positionImg + MOVE + "px");
	}
}

resetButton.onclick = function () {
	
		img.style.setProperty("left", 0 + "px");
	
}
