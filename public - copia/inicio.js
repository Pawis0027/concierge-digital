// ----------------------------declaracion de variables
let promociones = document.querySelectorAll(".contenedor-promocion")
let iSig = document.querySelector(".section-imagen-principal .sig")
let iPrev = document.querySelector(".section-imagen-principal .prev")
let numPromoActual = 0
contenedorScrollPromociones = document.querySelector(".contenedor-scroll-promociones");
let contenedorAuxiliarPromo = document.querySelectorAll(".contenedor-scroll-promociones .contenedor-auxiliar");
let contenedorAuxiliarPromoSeleccionado
// ---------------------------crearPromociones

// ----------------------------crear contenedores para promo principal
let sectionContenedorImgPrincipal = document.querySelector(".section-imagen-principal .contenedor");
let contenedorPromo = document.createElement("DIV");
contenedorPromo.classList.add("contenedor-promocion");
let contenedorIMG = document.createElement("DIV");
contenedorIMG.classList.add("contenedor-img");
let contenedorTxt = document.createElement("DIV");
contenedorTxt.classList.add("contenedor-txt");
let imgPrincipalPromo = document.createElement("IMG");
let h3Promo;
let pPromo;
sectionContenedorImgPrincipal.appendChild(contenedorPromo);
contenedorPromo.appendChild(contenedorIMG);
contenedorPromo.appendChild(contenedorTxt);
let promocionSeleccionada;
let p;
let h3;
let img;
let pTxtPromo;
let h3TxtPromo;
let contenedorBtnInfo;
let btnInfo;
let txtBtnInfo;


// -------obtener valores de servicio seleccionado 


let nombreRestaurante = "Taboo";
let srcImgPrincipalRestaurante = "imagenes/bici.png";
let categoriaRestaurante = "Beach-club";
let tipoDeComidaRestaurante = "Carne";
let calificacionRestaurante = "4.5 / 5";
let srcVideoIntroduccionRestaurante = "https://video.wixstatic.com/video/38d064_c7bb4bc8d98d488182d17b2ca7587c9f/720p/mp4/file.mp4";
let arrayImgsRestaurante = ["imagenes/xcaret.jpg", "imagenes/xplor.jpg", "imagenes/masajes.png", "imagenes/xplor.jpg"];
let linkMenuRestaurante = "menu.......";



class restaurante {
    constructor(nombre, srcImgPrincipal, categoria, tipoDeComida, calificacion, srcVideoIntroduccion, arrayImgs, linkMenu){
        this.nombre = nombre;
        this.srcImgPrincipal = srcImgPrincipal;
        this.categoria = categoria;
        this.tipoDeComida = tipoDeComida;
        this.calificacion = calificacion;
        this.srcVideoIntroduccion = srcVideoIntroduccion;
        this.arrayImgs = arrayImgs;
        this.linkMenu = linkMenu;
        };
    };
    let taboo = new restaurante (nombreRestaurante, srcImgPrincipalRestaurante, categoriaRestaurante, tipoDeComidaRestaurante, calificacionRestaurante, srcVideoIntroduccionRestaurante, arrayImgsRestaurante, linkMenuRestaurante);

pegarPromo();
// ------------------------funcion para dirigir boton a mas informacion
// ----------------------------funcion para cambiar num actual a promocion clickeada
for (let i = 0; i < promociones.length ; ++i) {
    let promocion= promociones[i];
    promocion.addEventListener("click", ()=>{
        numPromoActual = i;
        remplazarPromo();
    });
};
// ----------------------------boton para siguiente promocion
iSig.addEventListener("click", ()=>{
    if (numPromoActual >= (promociones.length - 1)) {
        numPromoActual = 0;
        remplazarPromo();
    } else {
        numPromoActual ++;
        remplazarPromo();
    };
});
// ----------------------------boton para promocion previa
iPrev.addEventListener("click", ()=>{
    if (numPromoActual <= 0) {
        numPromoActual = (promociones.length - 1);
        remplazarPromo();
    } else {
        numPromoActual -= 1;
        remplazarPromo();
    };
});

// ----------------------------funcion para obtener la informacion de la promocion seleccionada
function obtenerContenidoPromoPrincipal() {
    contenedorAuxiliarPromoSeleccionado = contenedorAuxiliarPromo[numPromoActual];
    promocionSeleccionada = promociones[numPromoActual];
    let listaItemsContenedorPromocion = promocionSeleccionada.childNodes;
    let divImg = listaItemsContenedorPromocion[1];
    let divTxt = listaItemsContenedorPromocion[3];
    img = divImg.childNodes[1].src;
    let listaItemsDivTxt = divTxt.childNodes;
    h3 = listaItemsDivTxt[1].textContent; 
    p = listaItemsDivTxt[3].textContent;
    };
// ----------------------------funcion para pegar la primer promoción (por defecto)
function pegarPromo() {
    h3Promo = document.createElement("H3");
    pPromo = document.createElement("P");
    obtenerContenidoPromoPrincipal();
    pTxtPromo = document.createTextNode(p);
    pPromo.appendChild(pTxtPromo);
    imgPrincipalPromo.src = img;
    h3TxtPromo = document.createTextNode(h3);
    h3Promo.appendChild(h3TxtPromo);
    contenedorIMG.appendChild(imgPrincipalPromo);
    sectionContenedorImgPrincipal.classList.add(nombreRestaurante);
    contenedorTxt.appendChild(h3Promo);
    contenedorTxt.appendChild(pPromo);
    contenedorAuxiliarPromoSeleccionado.classList.add("promocion-seleccionada");
};
// ----------------------------funcion para remplazar la promo vieja por la nueva
function remplazarPromo() {
    contenedorAuxiliarPromoSeleccionado.classList.remove("promocion-seleccionada");
    pPromo.removeChild(pTxtPromo);
    h3Promo.removeChild(h3TxtPromo);
    contenedorIMG.removeChild(imgPrincipalPromo);
    h3Promo = document.createElement("H3");
    pPromo = document.createElement("P");
    obtenerContenidoPromoPrincipal();
    pTxtPromo = document.createTextNode(p);
    pPromo.appendChild(pTxtPromo);
    imgPrincipalPromo.src = img;
    h3TxtPromo = document.createTextNode(h3);
    h3Promo.appendChild(h3TxtPromo);
    contenedorIMG.appendChild(imgPrincipalPromo);
    pPromo.classList.add("p-promo", "taboo");
    h3Promo.classList.add("h3-promo", "taboo");
    contenedorTxt.appendChild(h3Promo);
    contenedorTxt.appendChild(pPromo);
    contenedorAuxiliarPromoSeleccionado.classList.add("promocion-seleccionada");
    let posicionScroll = contenedorAuxiliarPromoSeleccionado.offsetLeft;
    contenedorScrollPromociones.scroll((posicionScroll - (contenedorScrollPromociones.offsetWidth / 100 * 33)), 0);
};
// --------------------------------darle enfoque al scroll servicios


