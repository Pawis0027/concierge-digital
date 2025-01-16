let body = document.querySelector("body");


// let nombreRestaurante;
// let srcImgPrincipalRestaurante;
// let categoriaRestaurante;
// let tipoDeComidaRestaurante;
// let calificacionRestaurante;
// let srcVideoIntroduccion;
// let imgsPromocionales;
// let linkMenuRestaurante;

// async function rearRestaurante() {
// }
// function obntenerValores() {
//     setTimeout(() => {
//      nombreRestaurante = "taboo";
//      srcImgPrincipalRestaurante = "imagenes/ilios.jpg";
//      categoriaRestaurante = "Beach-Club";
//      tipoDeComidaRestaurante = "Griega";
//      calificacionRestaurante = "5";
//      srcVideoIntroduccion = "https://video.wixstatic.com/video/38d064_c7bb4bc8d98d488182d17b2ca7587c9f/720p/mp4/file.mp4";
//      imgsPromocionales = ["imagenes/vegana.jpeg", "imagenes/spaguethi.jpg", "imagenes/vegana.jpeg"];
//      linkMenuRestaurante = "restaurante seleccionado.html";
//     }, 300);
// }

// // obteneiendo información--------------
// class Restaurante {
//     constructor(nombre, srcImgPrincipal, categoria, tipoDeComida, calificacion, srcVideoIntroduccion, arrayImgs, linkMenu){
//         this.nombre = nombre;
//         this.srcImgPrincipal = srcImgPrincipal;
//         this.categoria = categoria;
//         this.tipoDeComida = tipoDeComida;
//         this.calificacion = calificacion;
//         this.srcVideoIntroduccion = srcVideoIntroduccion;
//         this.arrayImgs = arrayImgs;
//         this.linkMenu = linkMenu;

//         for (let i = 0; i < arrayImgs.length; i++) {
//             let img = arrayImgs[i];
//             console.log(img);
//         }

//     };
// };
// // -----------------------------crear restaurantes--------------------------------------------------------------------------------------------------------------------------------------------
// let restaurante = new Restaurante (nombreRestaurante, srcImgPrincipalRestaurante, categoriaRestaurante, tipoDeComidaRestaurante, calificacionRestaurante, srcVideoIntroduccion, imgsPromocionales, linkMenuRestaurante);
// // obteneiendo información--------------


// -------------------añadiendo funciones a filtros-------
// -----------declarando variables
let filtro1 = document.querySelector("#filtrarpor");
let filtro2 = document.querySelector("#filtrando");
let divFiltro1 = document.querySelector(".filtros .xdefecto");
let divFiltro2 = document.querySelector(".filtros .interactivo");
// ---------------tipos de filtros
let precio = ["$ - Económico", "$$ - Moderado", "$$$ - De lujo"];
let calif = ["Menor a mayor", "Mayor a menor", "5 estrellas", "4 estrellas", "3 estrellas", "2 estrellas", "1 estrella"];
let tdc = ["Italiana","Griega","Sushi","Carne","Mariscos","Tacos","Vegana"];
let categoria = ["beach-club", "cerrado"];
// ----------segundo filtro interactivo-------
filtro1.addEventListener("change",()=>{
    switch (filtro1.value) {

        case "todo":
            console.log("todoooooo");
            divFiltro2.style = "display: none;";
            break;

        case "calificacion":
            filtrarPor(calif);
            break;

        case "precio":
            filtrarPor(precio);
            break;

        case "tdc":
            filtrarPor(tdc);
            break;  

        case "categoria":
            filtrarPor(categoria);
            break;
        default:
            alert("ha ocurrido un error");
            filtro1.value = "todo";
            break;
    };
});
const filtrarPor = (x)=>{

    divFiltro2.style = "display: flex;"
    let opciones = document.querySelectorAll("#filtrando option");
    for (let i = 0; i < opciones.length; i++) {
        let opcion = opciones[i];
        filtro2.removeChild(opcion);
    };
    for (let i = 0; i < x.length; i++) {
        let y = x[i];
        let principal = x[1];
        // princpial.selected = "true";
        // princpial.disabled = "disabled";
        // princpial.style = "display: none;";
        console.log(principal)
        let option = document.createElement("OPTION");
        let text = document.createTextNode(y);
        option.appendChild(text);
        option.value = y;
        filtro2.appendChild(option);
    };
    console.log(filtro2);
}

// ------------------------interactuar con restaurantes
let imgsCarrouselRest = document.querySelectorAll(".restaurantes .informacion .contenedor-imgs div");
for (let i = 0; i < imgsCarrouselRest.length; i++) {
    let img = imgsCarrouselRest[i];
    img.addEventListener("click", ()=>{
        let contenedorGen = img.parentNode.parentNode.parentNode;
        let contenedor = img.parentNode;
        let imgPrinRes = contenedorGen.firstElementChild.firstElementChild;
        let src = img.firstElementChild.src;
        imgPrinRes.src = src;
        contenedor.removeChild(img);
        contenedor.appendChild(img);
    });
};