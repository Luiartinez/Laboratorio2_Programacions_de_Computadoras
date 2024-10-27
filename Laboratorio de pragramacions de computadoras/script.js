function cambiarTexto() {
    document.getElementById('titulo').innerText = "Hola Mundo con JavaScript";
}

function cambiarColor() {
    document.getElementById('titulo').style.color = "red";
}

function cambiarAlineacion() {
    document.getElementById('titulo').style.textAlign = "center";
}

function crearTexto() {
    const nuevoTexto = document.createElement('p');
    nuevoTexto.id = "textoAgregado";
    nuevoTexto.innerText = "JavaScript permite crear páginas dinámicas";
    document.body.appendChild(nuevoTexto);
}

function borrarTexto() {
    const textoAgregado = document.getElementById('textoAgregado');
    if (textoAgregado) {
        document.body.removeChild(textoAgregado);
    }
}

document.getElementById('btnCambiarTexto').addEventListener('click', cambiarTexto);
document.getElementById('btnCambiarColor').addEventListener('click', cambiarColor);
document.getElementById('btnCambiarAlineacion').addEventListener('click', cambiarAlineacion);
document.getElementById('btnCrearTexto').addEventListener('click', crearTexto);
document.getElementById('btnBorrarTexto').addEventListener('click', borrarTexto);
