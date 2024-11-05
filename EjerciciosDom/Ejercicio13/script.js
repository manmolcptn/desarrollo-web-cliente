let showButton = document.getElementsByTagName("input")[0];
let img = document.querySelector("img");

img.style.filter = "blur(50px)";

showButton.onclick = function(){

	if (this.getAttribute("value") === "Show"){
		img.style.filter= "none";
		this.setAttribute("value", "Hide");
	}else{
		img.style.filter = "blur(50px)";
		this.setAttribute("value", "Show");
	}
}