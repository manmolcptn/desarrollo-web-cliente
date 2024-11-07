let botonGenerar = document.querySelectorAll("input")[0];
let botonComparar = document.querySelectorAll("input")[1];
let divsSection = document.querySelector("section").children;
let divSalida = document.getElementById("salida");
let timer = 0;

//Apartado A
// botonGenerar.onclick=function(){

//     for (let i = 0; i < divsSection.length; i++) {
//         //Elimino el texto que haya en los divs
//         divsSection[i].textContent="";
//         divSalida.textContent="";
//         let random = Math.floor(Math.random() * 50 + 1);
//         let textNode = document.createTextNode(random);
//         //Añado el Random a los Divs
//         divsSection[i].appendChild(textNode);
//     }
//     //Habilito/deshabilito botones
//     this.disabled=true;
//     botonComparar.disabled=false;
// }

//Apartado A
// botonComparar.onclick=function(){

//     divSalida.textContent="";

//     let mayor = parseInt(divsSection[0].textContent);
//     let menor = parseInt(divsSection[1].textContent);
//     let aux = 0;

//     if (mayor < menor){
//         aux = menor;
//         menor = mayor;
//         mayor = aux;
//     }
//     let text = document.createTextNode(mayor);
//     divSalida.appendChild(text);
//     this.disabled = true;
//     botonGenerar.disabled = false;
// }

//Apartado B
botonGenerar.onclick = function () {

    timer = setInterval(function () {
        for (let i = 0; i < divsSection.length; i++) {
            //Elimino el texto que haya en los divs
            divsSection[i].textContent = "";
            divSalida.textContent = "";
            let random = Math.floor(Math.random() * 50 + 1);
            let textNode = document.createTextNode(random);
            //Añado el Random a los Divs
            divsSection[i].appendChild(textNode);
        }
    }, 100);

    this.disabled = true;
    botonComparar.disabled = false;
}
//Apartado B
botonComparar.onclick = function (){
    clearInterval(timer);

    divSalida.textContent="";
    let mayor = parseInt(divsSection[0].textContent);
    let menor = parseInt(divsSection[1].textContent);
    let aux = 0;

    if (mayor < menor){
        aux = menor;
        menor = mayor;
        mayor = aux;
    }
    let text = document.createTextNode(mayor);
    divSalida.appendChild(text);
    this.disabled = true;
    botonGenerar.disabled = false;
}