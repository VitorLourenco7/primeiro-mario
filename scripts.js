const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function Mostrarform () {
   form.style.left = "50%"
   form.style.tranforme = "translateX(-50%)"
   mascara.style.visibility = "visible"
}
function esconderform () {
    form.style.left = "-300px"
   form.style.tranforme = "translateX(0)"
   mascara.style.visibility = "hidden"

}




