
function inicializarAutomata(){
	let tam = 0;
	let pasos = 0;
	
	do {
		tam = Number(prompt("Introduce el tamaño del autómata: "));
	} while (tam < 3 || isNaN(tam));
	
	pasos = Number(prompt("Introduce el número de pasos: "));

	let automata = [];
	for (let i = 0; i < tam; i++) {
		let random = Math.random(0,1);
		random > 0.5 ? automata.push(false) : automata.push(true);
	}
	return automata;
}

function mostrarEstado(automata){
	let newAutomata=[];

}

let array= inicializarAutomata();
