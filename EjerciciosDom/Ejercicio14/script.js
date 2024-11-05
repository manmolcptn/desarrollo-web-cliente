let liInicio = document.querySelector(".inicio");
let liProyectos = document.querySelector(".proyectos");
let liPortfolio = document.querySelector(".portfolio");

/* let parentInicio = ulInicio.parentNode;
let parentProyectos= ulProyectos.parentNode;
let parentPortfolio = ulPortfolio.parentNode;
 */

liInicio.onclick=function(){
    let ul = liInicio.children[0].children[0];
    console.log(ul);
}