const opciones = document.querySelector('.opciones')

// ---------------------------------obtener información de restaurantes

fetch('http://localhost:3000/restaurants')
  .then(res => res.json())
  .then(restaurants => {
    const html = restaurants.map(restaurant => {
      return `
      <div class="restaurantes">
        <a href="restaurants/${restaurant.restaurant_id}">
            <img class="principal" src="imagenes/descarga.jpeg" alt="comida">
            <h2>${restaurant.name}</h2>
        </a> 
            <div class="informacion">
                <p><a href="selected-restaurant">${restaurant.description}</a></p>
                <div class="contenedor-imgs">
                    <div><img class="img1" src="imagenes/descarga.jpeg" alt="comida"></div>
                    <div><img class="img2" src="imagenes/masajes.png" alt="comida"></div>
                    <div><img class="img3" src="imagenes/chef.jpeg" alt="comida"></div>
                    <div><img class="img4" src="imagenes/vegana.jpeg" alt="comida"></div>
                </div>
            </div>
            <div class="info-extra">
                <div class="precio">
                    <p>$$</p>
                </div>
                <div class="div-est">
                    <div class="estrella"></div>
                    <div class="estrella"></div>
                    <div class="media-estrella"></div>
                </div>
            </div>  
        </div>
        `
    }).join('')
    opciones.innerHTML = html
  })

  .catch(error => console.error('Error al obtener los datos:', error))

// async function rearRestaurante() {
// }
// function obntenerValores() {
//     setTimeout(() => {
//      nombreRestaurante = 'taboo'
//      srcImgPrincipalRestaurante = 'imagenes/ilios.jpg'
//      categoriaRestaurante = 'Beach-Club'
//      tipoDeComidaRestaurante = 'Griega'
//      calificacionRestaurante = '5'
//      srcVideoIntroduccion = 'https://video.wixstatic.com/video/38d064_c7bb4bc8d98d488182d17b2ca7587c9f/720p/mp4/file.mp4'
//      imgsPromocionales = ['imagenes/vegana.jpeg', 'imagenes/spaguethi.jpg', 'imagenes/vegana.jpeg']
//      linkMenuRestaurante = 'restaurante seleccionado.html'
//     }, 300)
// }

// // obteneiendo información--------------
// class Restaurante {
//     constructor(nombre, srcImgPrincipal, categoria, tipoDeComida, calificacion, srcVideoIntroduccion, arrayImgs, linkMenu){
//         this.nombre = nombre
//         this.srcImgPrincipal = srcImgPrincipal
//         this.categoria = categoria
//         this.tipoDeComida = tipoDeComida
//         this.calificacion = calificacion
//         this.srcVideoIntroduccion = srcVideoIntroduccion
//         this.arrayImgs = arrayImgs
//         this.linkMenu = linkMenu

//         for (let i = 0 i < arrayImgs.length i++) {
//             let img = arrayImgs[i]
//             console.log(img)
//         }

//     }
// }
// // -----------------------------crear restaurantes--------------------------------------------------------------------------------------------------------------------------------------------
// let restaurante = new Restaurante (nombreRestaurante, srcImgPrincipalRestaurante, categoriaRestaurante, tipoDeComidaRestaurante, calificacionRestaurante, srcVideoIntroduccion, imgsPromocionales, linkMenuRestaurante)
// // obteneiendo información--------------

// -------------------añadiendo funciones a filtros-------
// -----------declarando variables
const filtro1 = document.querySelector('#filtrarpor')
const filtro2 = document.querySelector('#filtrando')
// const divFiltro1 = document.querySelector('.filtros .xdefecto')
const divFiltro2 = document.querySelector('.filtros .interactivo')
// ---------------tipos de filtros
const precio = ['$ - Económico', '$$ - Moderado', '$$$ - De lujo']
const calif = ['Menor a mayor', 'Mayor a menor', '5 estrellas', '4 estrellas', '3 estrellas', '2 estrellas', '1 estrella']
const tdc = ['Italiana', 'Griega', 'Sushi', 'Carne', 'Mariscos', 'Tacos', 'Vegana']
const categoria = ['beach-club', 'cerrado']
// ----------segundo filtro interactivo-------
filtro1.addEventListener('change', () => {
  switch (filtro1.value) {
    case 'todo':
      console.log('todoooooo')
      divFiltro2.style = 'display: none'
      break

    case 'calificacion':
      filtrarPor(calif)
      break

    case 'precio':
      filtrarPor(precio)
      break

    case 'tdc':
      filtrarPor(tdc)
      break

    case 'categoria':
      filtrarPor(categoria)
      break
    default:
      console.alert('ha ocurrido un error')
      filtro1.value = 'todo'
      break
  }
})
const filtrarPor = (x) => {
  divFiltro2.style = 'display: flex'
  const opciones = document.querySelectorAll('#filtrando option')
  for (let i = 0; i < opciones.length; i++) {
    const opcion = opciones[i]
    filtro2.removeChild(opcion)
  }
  for (let i = 0; i < x.length; i++) {
    const y = x[i]
    const principal = x[1]
    // princpial.selected = 'true'
    // princpial.disabled = 'disabled'
    // princpial.style = 'display: none'
    console.log(principal)
    const option = document.createElement('OPTION')
    const text = document.createTextNode(y)
    option.appendChild(text)
    option.value = y
    filtro2.appendChild(option)
  }
  console.log(filtro2)
}

// ------------------------interactuar con restaurantes
const imgsCarrouselRest = document.querySelectorAll('.restaurantes .informacion .contenedor-imgs div')
for (let i = 0; i < imgsCarrouselRest.length; i++) {
  const img = imgsCarrouselRest[i]
  img.addEventListener('click', ()=>{
    const contenedorGen = img.parentNode.parentNode.parentNode
    const contenedor = img.parentNode
    const imgPrinRes = contenedorGen.firstElementChild.firstElementChild
    const src = img.firstElementChild.src
    imgPrinRes.src = src
    contenedor.removeChild(img)
    contenedor.appendChild(img)
  })
}
