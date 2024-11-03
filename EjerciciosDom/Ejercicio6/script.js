let buttons = document.querySelectorAll("input[type=button]");

//Recorro los elementos y le añado un evento que cambie el color de fondo
for (const button of buttons){
	button.onclick = () => {
		document.body.style.backgroundColor = button.value;
	}
}
