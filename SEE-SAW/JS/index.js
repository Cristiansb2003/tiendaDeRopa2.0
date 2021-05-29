var usuario = new Array();
var redirigir = document.getElementById("botons");

function agregarUsuario(
    nombre,
    apellido,
    pais,
    estado,
    municipio,
    colonia,
    calle
) {
    for (var i = 0; i <= 6; i++) {
        switch (i) {
            case 0:
                usuario[0] = nombre;
                break;
            case 1:
                usuario[1] = apellido;
                break;
            case 2:
                usuario[2] = pais;
                break;
            case 3:
                usuario[3] = estado;
                break;
            case 4:
                usuario[4] = municipio;
                break;
            case 5:
                usuario[5] = colonia;
                break;
            case 6:
                usuario[6] = calle;
                break;
            default:
                console.log("Ocurrio un error ");
        }
    }
    guardarSessionStorage(usuario);
}

function guardarSessionStorage(lista) {
    sessionStorage.setItem("usuario", JSON.stringify(lista));
}

function getSessionStorage() {
    var arrayDatos = sessionStorage.getItem("usuario");
    if (arrayDatos == null) {
        usuario = [];
    } else {
        arrayDatos = JSON.parse(arrayDatos);
    }
}

redirigir.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const pais = document.getElementById("pais").value;
    const estado = document.getElementById("estado").value;
    const municipio = document.getElementById("municipio").value;
    const colonia = document.getElementById("colonia").value;
    const calle = document.getElementById("calle").value;

    agregarUsuario(nombre, apellido, pais, estado, municipio, colonia, calle);
    window.location.href = "tienda.html";
});
