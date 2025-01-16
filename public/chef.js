let comidas = document.querySelectorAll(".tiempos ul li");
let body = document.querySelector("body")
let platilloSelec = document.querySelector(".platillos");
platilloSelec.style = "display: none;";
body.style = "overflow: scroll;";



// obteniendo la informacion{---------------}

let nombre1 = "italiana";
let src1 = "imagenes/spaguethi.jpeg";
let catego1 = "Comida";
let array1 = ["mole", "pizza de peperoni", "pasta a la bolognesa", "fettuchinni alfredo "];

let nombre2 = "Francesa";
let src2 = "imagenes/spaguethi.jpeg";
let catego2 = "Desayuno";
let array2 = ["bagel", "crossaint", "acai bowl", "hguevos posché", "bagel", "crossaint", "acai bowl", "hguevos posché"];

let nombre3 = "Sushi";
let src3 = "imagenes/spaguethi.jpeg";
let catego3 = "Cena";
let array3 = ["tankiyama", "yakimeshi", "pesinama", "poke bowl"];


class menu {
    constructor(nombre, srcImgPrincipal, categoria, array){
        this.nombre = nombre;
        this.srcImgPrincipal = srcImgPrincipal;
        this.categoria = categoria;
        this.array = array;
        console.log("                    ");
        console.log(nombre);
        for (let i = 0; i < array.length; i++) {
            let opcion = array[i];
            console.log(opcion);
        }
    };
};

// -----------------------------crear Menus--------------------------------------------------------------------------------------------------------------------------------------------
let italiana = new menu (nombre1, src1, catego1, array1);
let frances = new menu (nombre2, src2, catego2, array2);
let sushi = new menu (nombre3, src3, catego3, array3);








// obteniendo la informacion{---------------}




for (let i = 0; i < comidas.length; i++) {
    let comida = comidas[i];
    comida.addEventListener("click", ()=>{
        console.log(comida);
            platillos.style = "display: flex;";
            body.style = "overflow: hidden;";
    });
};

let cerrar = document.querySelector(".platillos .contenedor .cerrar");
let platillos = document.querySelector(".platillos");
cerrar.addEventListener("click", ()=>{
    platillos.style = "display: none;"
    body.style = "overflow: scroll;"
});