let img = [];
var indice = 0
var slid
img[0] = 'img/1.jpg'
img[1] = 'img/2.jpg'
img[2] = 'img/3.jpg'
img[3] = 'img/4.jpg'
img[4] = 'img/5.jpg'
img[5] = 'img/6.jpg'
img[6] = 'img/7.jpg'
img[7] = 'img/8.jpg'
img[8] = 'img/9.jpg'
img[9] = 'img/10.jpg'
img[10] = 'img/11.jpg'

function cambiarImagen(int) {
    if (int == 1) {
        if (indice < img.length - 1) {
            indice++
        } else {
            indice = 0
        }
    } else {
        if (indice > 0) {
            indice--
        } else {
            indice = img.length - 1
        }
    }
    document.getElementById("img").src = img[indice]
}
function startSlide() {
    let btn = document.getElementById("start")
    if (btn.value == 'Iniciar') {
        slid = setInterval(cambiarImagen, 2000)
        btn.value = 'Parar'
    } else {
        clearInterval(slid)
        btn.value = 'Iniciar'
    }
}


