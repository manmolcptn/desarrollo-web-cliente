let boton = document.querySelector("input");
let div = document.querySelector("div");

boton.onclick = function(){
    let tamanioN = 0;
    let tamanioM = 0;
    //Compruebo que introduce datos correctos
    do {
        tamanioN = Number(prompt("Introduce el numero de filas de la tabla: "));
        //Los parseo a Number para luego comprobar si son numeros enteros
    } while (tamanioN < 1 || tamanioN > 10 || !Number.isInteger(tamanioN));

    do {
        tamanioM = Number(prompt("Introduce el numero de columnas de la tabla: "));
    } while (tamanioM < 1 || tamanioM > 10 || !Number.isInteger(tamanioM));
    
    //Añado la clase tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "tabla");

    //Creo la tabla
    for (let i = 0; i < tamanioN; i++) {
        let tr = document.createElement("tr");
        
        for (let j = 0; j < tamanioM; j++) {
            let td = document.createElement("td");
            let text = document.createTextNode(i+1);
            td.appendChild(text);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    div.appendChild(tabla);
}