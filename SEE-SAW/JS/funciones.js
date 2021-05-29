//Array
var cantidadDePrendas = new Array();
var precios = new Array();
var total = 0;
var contadorPrendas = 0;
let contador = 0;
const sujetador = document.querySelector(".sujetador");
var pantalon = document.querySelector(".pantalon");
const falda = document.querySelector(".falda");
const pijama = document.querySelector(".pijama");
const sujetador2 = document.querySelector(".sujetador2");
const pantalon2 = document.querySelector(".pantalon2");
const falda2 = document.querySelector(".falda2");
const pijama2 = document.querySelector(".pijama2");
const carro = document.querySelector(".carro");

function agregarCarrito() {
    if (contador <= 3) {
        contador++;
        document.querySelector("#valor").innerHTML = contador;
        //  console.log(total);
    } else {
        swal("No puedes agregar mas de 4 prendas");
    }
}

function agregarPrendas(prenda, precio) {
    cantidadDePrendas[contadorPrendas] = prenda;
    precios[contadorPrendas] = precio;
    total = total + precio;
    contadorPrendas++;
}

function agregarArray(arrayPrendas, totalPrecio) {
    sessionStorage.setItem("myArray", JSON.stringify(arrayPrendas));
    sessionStorage.setItem("precios", JSON.stringify(precios));
    sessionStorage.setItem("total", totalPrecio);
}

sujetador.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("sujetador", "sujetador");
        agregarPrendas("sujetador", 200);
    }
    agregarCarrito();
});
sujetador2.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("sujetador2", "sujetador");
        agregarPrendas("sujetador2", 260);
    }
    agregarCarrito();
});

pantalon.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("pantalon", "pantalon");
        agregarPrendas("pantalon", 280);
    }
    agregarCarrito();
});

pantalon2.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("pantalon2", "pantalon");
        agregarPrendas("pantalon2", 280);
    }
    agregarCarrito();
});

pijama.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("pijama", "pijama");
        agregarPrendas("pijama", 400);
    }
    agregarCarrito();
});

pijama2.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("pijama2", "pijama");
        agregarPrendas("pijama2", 450);
    }
    agregarCarrito();
});

falda.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("falda", "falda");
        agregarPrendas("falda", 200);
    }
    agregarCarrito();
});

falda2.addEventListener("click", function () {
    if (contador < 4) {
        sessionStorage.setItem("falda2", "falda");
        agregarPrendas("falda2", 220);
    }
    agregarCarrito();
});

carro.addEventListener("click", function () {
    agregarArray(cantidadDePrendas, total);
    window.location.href = "plantilla-tiket.html";
});
