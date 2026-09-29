let contactos = [];

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const mensajeVacio = document.getElementById("mensajeVacio");
const contador = document.getElementById("contador");
const buscar = document.getElementById("buscar");

function actualizarContador() {
    contador.textContent = "Contactos: " + contactos.length;
}

function mostrarContactos(lista) {

    listaContactos.innerHTML = "";

    if (lista.length === 0) {
        mensajeVacio.style.display = "block";
        actualizarContador();
        return;
    }

    mensajeVacio.style.display = "none";

    lista.forEach(function(contacto) {

        const div = document.createElement("div");

        div.className = "contacto";

        div.innerHTML = `
            <div class="datos-contacto">
                <strong>${contacto.nombre}</strong>
                <span>${contacto.telefono}</span>
            </div>

            <button class="btnEliminar">
                Eliminar
            </button>
        `;

        const botonEliminar = div.querySelector(".btnEliminar");

        botonEliminar.addEventListener("click", function() {

            const indice = contactos.indexOf(contacto);

            contactos.splice(indice, 1);

            mostrarContactos(contactos);

        });

        listaContactos.appendChild(div);

    });

    actualizarContador();
}


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

});


buscar.addEventListener("input", function() {

    const texto = buscar.value.toLowerCase();

    const contactosFiltrados = contactos.filter(function(contacto) {

        return contacto.nombre.toLowerCase().includes(texto);

    });

    mostrarContactos(contactosFiltrados);

});  


function actualizarContador() {

    contador.textContent = contactos.length;

}

mostrarContactos(contactos);
actualizarContador();

contactos.length
