const formulario = document.querySelector(".fale-conosco")
const mascara =document.querySelector(".mask2")
function cliquei() {
    formulario.style.top = "40%"
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.display = "block"
}

function desaparece() {
    formulario.style.top = "40%"
    formulario.style.left = "-500px"
    formulario.style.transform = "translateX(0)"
    mascara.style.display = "none"
}


