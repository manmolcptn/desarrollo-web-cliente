let aniadirBoton = document.querySelector("input[value=Añadir]");
let limpiarBoton = document.querySelector("input[value=Limpiar]");
let contenedor = document.querySelectorAll("#contenedor")[0];

aniadirBoton.onclick = function(){
    limpiarBoton.disabled=false;
    let ruta = prompt("¿Que imagen deseas añadir?");
    let img = document.createElement("img");

    img.setAttribute("src", `../Molina_Capitan_MiguelAngel/img/${ruta}`);
    
    //Compruebo que meta la extension .jpg, que no sea null y que no me deje el prompt en blanco 
    if (typeof(ruta) == "object" || ruta == ""){
        img.setAttribute("src", "../Molina_Capitan_MiguelAngel/img/terra.jpg") ;
    }
    img.setAttribute("class", "foto");
    contenedor.appendChild(img);
}

limpiarBoton.onclick = function(){
    let hijosContenedor = contenedor.children.length;
    for (let i = 0; i < hijosContenedor; i++) {
        let imagenEliminar = contenedor.children[0];
        contenedor.removeChild(imagenEliminar);
    }
}