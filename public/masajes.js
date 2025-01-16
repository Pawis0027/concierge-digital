let introDiv = document.querySelector("section.titulo .introduccion");
let introAlto;
let introBottom;
let primerSection = document.querySelector("section.primer");
let body = document.querySelector("body")

const acomodarInfo = ()=>{
    introAlto = introDiv.clientHeight;
    introBottom = (introAlto *.60);
    introDiv.style = `bottom: -${introBottom}px`;
    primerSection.style = `padding-top: ${(introBottom + 50)}px`;
};

acomodarInfo();

// ------------acomodar textPath
// window.addEventListener("resize", ()=>{
//     let textPath = document.querySelector("section.favorito .ola svg text")
//     console.log(textPath.offserWidth)
// })