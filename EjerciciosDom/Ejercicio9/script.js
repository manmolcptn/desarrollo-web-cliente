window.onload = () =>{
    changeStyles();
	// apartadoA();
}

function changeStyles(){
	let p1 = document.getElementsByTagName("p")[0];
	p1.onclick = function(){
		this.sytle.backgroundColor = "yellow";
		this.style.border="1px solid black";
		this.style.borderRadius= "15px";
		this.style.padding="10px";
	}

	// p2.onclick = function(){
	// 	this.sytle.backgroundColor = "red";
	// 	this.style.border="2px solid black";
	// 	this.style.borderRadius= "5px";
	// 	this.style.padding="10px";
	// }

}
function apartadoA(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.onclick = function(){
        this.style.backgroundColor = "red";
        this.style.border = "2px solid black";
        this.style.margin = "40px";
        this.style.color = "white";
        this.style.fontSize = "16px";
    }
}
