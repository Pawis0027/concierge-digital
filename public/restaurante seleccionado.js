
// ------ declarar variables parara contenedores de contenido informativo
const body = document.querySelector('body')
// let contenedorCaracteristicas = document.querySelector(".caracteristicas-restaurante .contenedor");
// let sectionVideoIntroduccionRestaurante = document.querySelector(".video-promo");
// let contenedorVideoIntroduccionRestaurante = document.querySelector(".video-promo .contenedor-general");
// let videoIntroduccionRestaurante = document.querySelector(".video-promo .contenedor-general video");
// let contenedorCarrousel = document.querySelector(".carrousel-restaurante .contenedor-scroll");
// let contenedorMain = document.querySelector(".contenedor-main");

// ----------------------------acomodar tof
const descDiv = document.querySelector('.description')
const tof = document.querySelector('.portada .tof')
let tofHeight
let tofhalf
const acomodarTof = () => {
  tofHeight = tof.clientHeight
  tofhalf = tofHeight / 2
  tof.style = `bottom: -${tofhalf}px`
  descDiv.style = `padding-top: ${tofhalf}px`
}

acomodarTof()

// -------obtener valores de servicio seleccionado

const nombreRestaurante = 'Taboo'
const srcImgPrincipalRestaurante = 'imagenes/bici.png'
const categoriaRestaurante = 'Beach-club'
const tipoDeComidaRestaurante = 'Carne'
const calificacionRestaurante = 3.5
const srcVideoIntroduccionRestaurante = 'https://video.wixstatic.com/video/38d064_c7bb4bc8d98d488182d17b2ca7587c9f/720p/mp4/file.mp4'
const imgsPromocionales = ['imagenes/xcaret.jpg', 'imagenes/xplor.jpg', 'imagenes/masajes.png', 'imagenes/spagethi.jpeg']
const linkMenuRestaurante = 'https://www.instagram.com/isaaburrida/'
const datosDevueltos = true
const descripcionRestaurante = 'Restaurante 5 estrellas con una excelemte vista al mar y ambientado todo el tiempo con musica en vivo y comida interactiva'

// --------crear funcion para agregar imagenes del restaurante

const descP = document.querySelector('.description p')
const p = document.createTextNode(descripcionRestaurante)
descP.appendChild(p)

// --------crear funcion para agregar imagenes del restaurante

const contenedorCarrousel = document.querySelector('.carrousel-restaurante .contenedor-scroll')
const agregarImgsRest = (Imgs) => {
  for (let i = 0; i < Imgs.length; i++) {
    const imgCarrousel = Imgs[i]
    const div = document.createElement('DIV')
    div.classList.add('div-imagenes-scroll', i)
    const img = document.createElement('IMG')
    img.src = imgCarrousel
    div.appendChild(img)
    contenedorCarrousel.appendChild(div)
  }
}

agregarImgsRest(imgsPromocionales)

// --------crear funcion para agregar estrellas del restaurante

const contenedorEstrellas = document.querySelector('.portada .rating')

const crearEstrellas = (num) => {
  const div = document.createElement('DIV')
  if (Number.isInteger(num)) {
    for (let i = 0; i < num; ++i) {
      const estrella = document.createElement('DIV')
      estrella.classList.add('estrella')
      div.appendChild(estrella)
    };
  } else {
    for (let i = 1; i <= num; i++) {
      const estrella = document.createElement('DIV')
      estrella.classList.add('estrella')
      div.appendChild(estrella)
    };
    const mediaEstrella = document.createElement('DIV')
    mediaEstrella.classList.add('media-estrella')
    div.appendChild(mediaEstrella)
  };
  contenedorEstrellas.appendChild(div)
}
crearEstrellas(calificacionRestaurante)

// ----------añadir funcion a scroll de imagenes promocionales del restaurante

const imgsCarrousel = document.querySelectorAll('.carrousel-restaurante .div-imagenes-scroll img')
let imgCarrouselActiva = false
// const primeravez = true
let numImgActual
const imgSelec = document.querySelector('.carrousel-restaurante-div-fondo .imgSelec')
const divImgSelec = document.querySelector('.carrousel-restaurante-div-fondo')
const imgSelecSig = document.querySelector('.carrousel-restaurante-div-fondo .sig')
const imgSelecPrev = document.querySelector('.carrousel-restaurante-div-fondo .prev')

for (let i = 0; i < imgsCarrousel.length; i++) {
  const imgCarrousel = imgsCarrousel[i]
  imgCarrousel.addEventListener('click', () => {
    numImgActual = i
    if (imgCarrouselActiva === false) {
      expandirImg(imgsCarrousel[numImgActual], numImgActual)
    } else {
      console.log('ya ha sido seleccionada una imagen')
    }
  })
}

imgSelecPrev.addEventListener('click', () => {
  if (numImgActual > 0) {
    numImgActual--
  } else {
    numImgActual = (imgsCarrousel.length - 1)
  };
  seleccionarImg(imgsCarrousel[numImgActual], numImgActual)
})

imgSelecSig.addEventListener('click', () => {
  if (numImgActual < ((imgsCarrousel.length - 1))) {
    numImgActual++
  } else {
    numImgActual = 0
  }
  seleccionarImg(imgsCarrousel[numImgActual], numImgActual)
})

function expandirImg (imgCarrousel, numImgActual) {
  divImgSelec.style = 'display: flex'
  body.classList.add('no-scroll')
  //  header.style = 'display: none'
  imgCarrouselActiva = true
  const cerrarImg = document.querySelector('.carrousel-restaurante-div-fondo .btn-back')
  cerrarImg.addEventListener('click', () => {
    divImgSelec.style = 'display: none'
    imgCarrouselActiva = false
    body.classList.remove('no-scroll')
    // header.style = ''
  })
  seleccionarImg(imgCarrousel, numImgActual)
}
function seleccionarImg (imgCarrousel, numImgActual) {
  imgSelec.src = imgCarrousel.src
  console.log(imgCarrousel, numImgActual)
};

// --------crear funcion para agregar estrellas del restaurante

const itinerario = document.querySelector('.extra-info .itinerary')
const horarios = document.querySelector('.extra-info .horarios')
let horariosHidden = false
itinerario.addEventListener('click', () => {
  if (horariosHidden) {
    horarios.style = ''
    horariosHidden = false
  } else {
    horarios.style = 'display: none;'
    horariosHidden = true
  }
})

//   --------------abrir menu
const menu = document.querySelector('.carrousel-restaurante .menu')
menu.addEventListener('click', () => {
  window.open(linkMenuRestaurante)
})

window.addEventListener('resize', () => {
  acomodarTof()
})

// // ----------------------------darle función a header
// let header = document.querySelector("header");
// //-------darle funcion a navAnt
// let navAnt = document.querySelector("header .nav-ant");
// navAnt.addEventListener("click", ()=>{
//     window.history.back();
// });
// //-------darle funcion a menu
// let menuIcono = document.querySelector("header .menu-icono");
// let menuDesplegable = document.querySelector(".menu-desplegable");
// menuIcono.addEventListener("click", ()=>{
//     menuDesplegable.style = "";
//     navAnt.style = "display: none;";
// });
// //-------darle funcion a cerrar menu
// let cerrarMenu = document.querySelector("header .menu-desplegable .cerrar-menu");
// cerrarMenu.addEventListener("click", ()=>{
//     menuDesplegable.style = "display: none;";
//     navAnt.style = "";
// });
// // -------obtener valores de servicio seleccionado
// let nombreRestaurante;
// let srcImgPrincipalRestaurante;
// let categoriaRestaurante;
// let tipoDeComidaRestaurante;
// let calificacionRestaurante;
// let srcVideoIntroduccionRestaurante;
// let imgsPromocionales;
// let linkMenuRestaurante;
// let datosDevueltos = false;
// let descripcionRestaurante;

//     nombreRestaurante = "Taboo";
//     srcImgPrincipalRestaurante = "imagenes/bici.png";
//     categoriaRestaurante = "Beach-club";
//     tipoDeComidaRestaurante = "Carne";
//     calificacionRestaurante = 5;
//     srcVideoIntroduccionRestaurante = "https://video.wixstatic.com/video/38d064_c7bb4bc8d98d488182d17b2ca7587c9f/720p/mp4/file.mp4";
//     imgsPromocionales = ["imagenes/xcaret.jpg", "imagenes/xplor.jpg", "imagenes/masajes.png", "imagenes/spagethi.jpeg"];
//     linkMenuRestaurante = "https://www.instagram.com/";
//     datosDevueltos = true;
//     descripcionRestaurante = "Restaurante 5 estrellas con una excelemte vista al mar y ambientado todo el tiempo con musica en vivo y comida interactiva"

// // --------crear funcion para agregar contenido de las caracteristicas del restaurante 
//     const crearP = (negrita, contenido, nombre)=> {
//         let div = document.createElement("DIV");
//         div.classList.add("div-caracteristica", nombre);
//         let P1 = document.createElement("P");
//         P1.classList.add("p1");
//         let P2 = document.createElement("P");
//         P2.classList.add("p2");
//         let contP1 = document.createTextNode(negrita + ":");
//         let contP2 = document.createTextNode(contenido);
//         P1.appendChild(contP1);
//         P2.appendChild(contP2);
//         div.appendChild(P1);
//         div.appendChild(P2);
//         contenedorCaracteristicas.appendChild(div);
//     };
// // --------crear funcion para agregar contenido de las caracteristicas del restaurante   
//     const crearEstrellas = (num, nombre)=> {
//         let div = document.createElement("DIV");
//         div.classList.add("div-caracteristica", nombre);
//         let P1 = document.createElement("P");
//         P1.classList.add("p1");
//         let contP1 = document.createTextNode("Calificación:");
//         P1.appendChild(contP1);
//         let divEst = document.createElement("DIV");
//         divEst.classList.add("div-est");
//         if (Number.isInteger(num)) {
//             for (let i = 0; i < num; ++i) {
//                 let estrella = document.createElement("DIV");
//                 estrella.classList.add("estrella");
//                 divEst.appendChild(estrella);
//             };
//         } else {
//             for (let i = 1; i <= num; i++) {
//                 let estrella = document.createElement("DIV");
//                 estrella.classList.add("estrella");
//                 divEst.appendChild(estrella);
//             };
//                 let mediaEstrella = document.createElement("DIV");
//                 mediaEstrella.classList.add("media-estrella");
//                 divEst.appendChild(mediaEstrella);
//         };
//             div.appendChild(P1);
//             div.appendChild(divEst);
//             contenedorCaracteristicas.appendChild(div);
//     };
// // --------crear funcion para agregar imagenes del restaurante
// const agregarImgsRest = (Imgs)=> {
//     for (let i = 0; i < Imgs.length; i++) {
//         let imgCarrousel = Imgs[i];
//         let div = document.createElement("DIV");
//         div.classList.add("div-imagenes-scroll", i);            
//         let img = document.createElement("IMG");
//         img.src = imgCarrousel;
//         div.appendChild(img);
//         contenedorCarrousel.appendChild(div);
        
//     }};
// const agregarDesc = (desc, nombre)=>{
//     let p = document.createElement("P");
//     let span = document.createElement("SPAN");
//     let sptxt = document.createTextNode("Descripción: ");
//     let texto = document.createTextNode(desc);
//     span.appendChild(sptxt);
//     p.appendChild(span);
//     p.appendChild(texto);
//     p.classList = nombre;
//     p.classList = "desc"; 
//     contenedorCaracteristicas.appendChild(p);
// };
// // ------ creacion de objeto (restaurante)
// class cntrRestaurante {
//     constructor(nombre, descripcion, srcImgPrincipal, categoria, tipoDeComida, calificacion, srcVideoIntroduccion, arrayImgs, linkMenu){
//         this.nombre = nombre;
//         this.descripcion = descripcion
//         this.srcImgPrincipal = srcImgPrincipal;
//         this.categoria = categoria;
//         this.tipoDeComida = tipoDeComida;
//         this.calificacion = calificacion;
//         this.srcVideoIntroduccion = srcVideoIntroduccion;
//         this.arrayImgs = arrayImgs;
//         this.linkMenu = linkMenu;

//         videoIntroduccionRestaurante.src = srcVideoIntroduccion;
//         // --------agregar caracteristicas del restaurante
//         crearP("Nombre", nombre, nombre);
//         crearP("Categoria", categoria, nombre);
//         crearP("Tipo de comida", tipoDeComida, nombre);
//         agregarDesc( descripcion, nombre);
//         // --------agregar estrellas del restaurante
//         crearEstrellas(calificacionRestaurante, nombre);
//         // --------agregar imagenes del restaurante
//         agregarImgsRest(arrayImgs);

//     };
// };
// // -----------------------------crear restaurantes--------------------------------------------------------------------------------------------------------------------------------------------
// let restaurante = new cntrRestaurante (nombreRestaurante, descripcionRestaurante, srcImgPrincipalRestaurante, categoriaRestaurante, tipoDeComidaRestaurante, calificacionRestaurante, srcVideoIntroduccionRestaurante, imgsPromocionales, linkMenuRestaurante);
// console.log(restaurante);

// // darle funcion al boton de pausa de video introduccion
// let divPausa = document.querySelector(".video-promo .contenedor-general .pausa");
// let btnPausa = document.querySelector(".video-promo .contenedor-general .pausa img");
// let videoPlaying = false;
// divPausa.addEventListener("click", ()=>{
//     if (videoPlaying == false) {
//         reproducirvideo();

//     } else {
//         pausarvideo();

//     };
        
// });
// function reproducirvideo() {
//     btnPausa.classList.add("display-none");
//     btnPausa.src = "imagenes/previo.png";
//     videoIntroduccionRestaurante.play();
//     videoPlaying = true;  
//     videoIntroduccionRestaurante.classList.remove("pausado");
// };
// function pausarvideo() {
//     btnPausa.classList.remove("display-none");
//     btnPausa.src = "imagenes/siguiente.png";
//     videoIntroduccionRestaurante.pause();
//     videoIntroduccionRestaurante.classList.add("pausado");
//     videoPlaying = false;    
// };


// // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // ----------darle funcion al panel de volumen de video introduccion
// let iconoVolumenVideoPromo = document.querySelector(".video-promo .panel-de-control .volumen .volumen-icono");
// let sliderVolumenVideoPromo = document.querySelector(".video-promo .panel-de-control .volumen .slider");
// sliderVolumenVideoPromo.value = 100;
// videoIntroduccionRestaurante.volume = 1;
// let silenciado = false;
// iconoVolumenVideoPromo.style.color = "var(--gris-claro)";
// sliderVolumenVideoPromo.addEventListener("change",()=>{
//     if (sliderVolumenVideoPromo.value  == 0) {
//         videoIntroduccionRestaurante.volume = 0;
//         iconoVolumenVideoPromo.style.color = "var(--gris-oscuro)";
//         silenciado = true;
//     } else {
//         iconoVolumenVideoPromo.style.color = "var(--gris-claro)";
//         videoIntroduccionRestaurante.volume = (sliderVolumenVideoPromo.value * .01);
//         silenciado = false;
//     };
// });

// iconoVolumenVideoPromo.addEventListener("click",()=>{
//     if (silenciado  == false) {
//         sliderVolumenVideoPromo.value = 0;
//         videoIntroduccionRestaurante.volume = 0;
//         iconoVolumenVideoPromo.style.color = "var(--gris-oscuro)";
//         silenciado = true;
//     } else {
//         iconoVolumenVideoPromo.style.color = "var(--gris-claro)";
//         videoIntroduccionRestaurante.volume = 1;
//         sliderVolumenVideoPromo.value = 100;
//         silenciado = false;
//     };
// });
// // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // ----------darle funcion al boton agrandar pantalla de video introduccion
// let btnPantallaCompleta = document.querySelector(".video-promo .contenedor-general .panel-de-control .btn-pantalla-completa");
// let contenedorVideo = document.querySelector(".video-promo .contenedor-general .contenedor-video");
// let pantallaCompleta = false;
// btnPantallaCompleta.addEventListener("click", ()=>{
//     if (pantallaCompleta == true ) {
//         document.exitFullscreen();
//         pantallaCompleta = false;
//         btnPantallaCompleta.src = "imagenes/siguiente.png";
//         sectionVideoIntroduccionRestaurante.style = "";
//         contenedorVideo.classList.remove("grande");
//         contenedorVideo.classList.add("chico");        
//     } else {
//         sectionVideoIntroduccionRestaurante.requestFullscreen();
//         pantallaCompleta = true;        
//         btnPantallaCompleta.src = "imagenes/previo.png";
//         sectionVideoIntroduccionRestaurante.style = "background-color: #000";
//         contenedorVideo.classList.remove("chico");
//         contenedorVideo.classList.add("grande"); 
//     };
// });
// // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------