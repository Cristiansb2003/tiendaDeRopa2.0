const sujetadorImg = new Image();
sujetadorImg.src = "img/top.png";

const pantalonImg = new Image();
pantalonImg.src = "img/pantalon.png";

const pijamaImg = new Image();
pijamaImg.src = "img/pijama.png";

const faldaImg = new Image();
faldaImg.src = "img/falda.png";

const confirmar = document.getElementById("confirmar");
//Obtencion de datos
var arrayPrendas = sessionStorage.getItem("myArray");
var usuario = sessionStorage.getItem("usuario");
var total = sessionStorage.getItem("total");
var precios = sessionStorage.getItem("precios");
console.log(total);

//Transformación de datos
arrayPrendas = JSON.parse(arrayPrendas);
precios = JSON.parse(precios);
usuario = JSON.parse(usuario);
console.log(precios);
//Concatenacion de datos
const domicilio =
    usuario[2] +
    ", " +
    usuario[3] +
    ", " +
    usuario[4] +
    ", " +
    usuario[5] +
    ", " +
    usuario[6];
const nombre = usuario[0] + " " + usuario[1];
//gregar columna
function agregar(valor1, valor2) {
    var tabla = document.querySelector("#tablaPrendas");
    var columna = document.createElement("tr");
    var fila = document.createElement("td");
    var fila2 = document.createElement("td");
    fila.append(valor1);
    fila2.append(valor2);
    columna.append(fila);
    columna.append(fila2);
    tabla.append(columna);
}

function getDatos() {
    var apartadoNombre = document.querySelector("#nombre");
    var apartadoDomicilio = document.querySelector("#domicilio");
    apartadoNombre.innerHTML = nombre;
    apartadoDomicilio.innerHTML = domicilio;
    var cantidadPrendas = arrayPrendas.length;
    for (var i = 1; i <= cantidadPrendas; i++) {
        agregar(arrayPrendas[i - 1], "$" + precios[i - 1]);
        console.log(i);
    }
    agregar("Total", "$" + total);
}
getDatos();

confirmar.addEventListener("click", function () {
    window.location.href = "fin.html";
});

console.log(domicilio);
console.log(nombre);
