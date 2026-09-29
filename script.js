let contactos = [];

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const mensajeVacio = document.getElementById("mensajeVacio");
const contador = document.getElementById("contador");
const buscar = document.getElementById("buscar");

function mostrarContactos(lista) {

    listaContactos.innerHTML = "";

    if (lista.length === 0) {
        mensajeVacio.style.display = "block";
        return;
    }

    mensajeVacio.style.display = "none";

    lista.forEach(function(contacto, indice) {

        const div = document.createElement("div");

        div.className = "contacto";

        div.innerHTML = `
            <div class="datos-contacto">
                <strong>${contacto.nombre}</strong>
                <span>${contacto.telefono}</span>
            </div>

            <button class="btnEliminar" data-indice="${indice}">
                Eliminar
            </button>
        `;

        listaContactos.appendChild(div);

    });

    const botonesEliminar =
        document.querySelectorAll(".btnEliminar");

    botonesEliminar.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const indice = boton.getAttribute("data-indice");

            contactos.splice(indice, 1);

            mostrarContactos(contactos);

            actualizarContador();

        });

    });
}

document.createElement()

btnAgregar.addEventListener("click", function() {

    const nombreIngresado = nombre.value.trim();
    const telefonoIngresado = telefono.value.trim();

    if (nombreIngresado === "" || telefonoIngresado === "") {
        return;
    }

    const nuevoContacto = {
        nombre: nombreIngresado,
        telefono: telefonoIngresado
    };

    contactos.push(nuevoContacto);

    nombre.value = "";
    telefono.value = "";

    mostrarContactos(contactos);

    actualizarContador();

});

if (nombreIngresado === "" || telefonoIngresado === "") {
    return;
}
