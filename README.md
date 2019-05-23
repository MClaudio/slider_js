# slider_js
## Programacion Hipermedial
1.	Creación de una Galería dinámica
•	Se crea la estructura de HTML
```html
 <div class="slide">
        <div class="img">
            <img src="img/1.jpg" alt="" id="img">
        </div>
        <div class="btns">
            <input type="button" value="Anterior" onclick="cambiarImagen(0)" >
            <input type="button" id="start" value="Iniciar" onclick="startSlide()">
            <input type="button" value="Siguente" onclick="cambiarImagen(1)">
        </div>
    </div>
```
•	Se procede a dar estilos con CSS
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body .slide{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.slide .img{
    width: 80%;
    height:85%;
}
.slide .img img{
    width: 100%;
    height: 100%;
}
.slide .btns{
    margin-top: 15px;
    width: 25%;
    display: flex;
    justify-content: space-between;
}
.slide input{
    padding: 10px 20px;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    background-color: #E80C2E;
    color: #FFF;
}
.slide input:hover{
    background-color: #FF2F1A;
}
```
•	Posteriormente se cargan las imágenes a utilizar a una carpeta del proyecto para mejor identificación se ponen los nombres en números.
 
•	Un ves estilizado y cargado las imágenes con JavaScript se procede a dar dinamismo a la galería.
Se inicializan las variables, así como la carga de imágenes para poder realizar la transición entre ellas.
 
•	Se crean los métodos que harán dinámico a la galería el método cambiarImagen() se encarga de cambiar las imágenes una a una dependiendo si se presiona el botón siguiente o anterior para ello la variable índice o se acumulo o decrementa para recorrer el array de imágenes.
```javascript
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
```
•	El método startSlide() crea una variable de intervalo de tiempo así mismo alterna el value del botón para parar o iniciar cuando se presiona parar la variable de intervalo es destruida por lo tanto no hará más transiciones entre las imágenes.
```javascript
function startSlide() {
    let btn = document.getElementById("start")
    if (btn.value == 'Iniciar') {
        slid = setInterval(cambiarImagen, 1000)
        btn.value = 'Parar'
    } else {
        clearInterval(slid)
        btn.value = 'Iniciar'
    }
}
```
•	El repositorio de GitHub se encuentra en el siguiente enlace:
https://github.com/MClaudio/slider_js 
•	Usuario: MClaudio
