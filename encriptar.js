function agregarImagenConTextoEnId(urlImagen, texto, id) {
    var elemento = document.getElementById(id);
    elemento.innerHTML = ""; //elimina contenido anterior
    var imagen = document.createElement("img");
    imagen.src = urlImagen;
    document.getElementById(id).appendChild(imagen);
    var textoNoE = document.createTextNode(texto);
    elemento.appendChild(imagen);
    elemento.appendChild(textoNoE);
}

function encriptar() {
    var frase = document.getElementById("insercionTexto").value.toLowerCase();

    var insercionTexto = frase.replace(/e/img, "enter");
    var insercionTexto = insercionTexto.replace(/o/img, "ober");
    var insercionTexto = insercionTexto.replace(/i/img, "imes");
    var insercionTexto = insercionTexto.replace(/a/img, "ai");
    var insercionTexto = insercionTexto.replace(/u/img, "ufat");

    if (frase.length != 0) {
        document.getElementById("resultadoTexto").innerHTML = insercionTexto;
    } else  {
        agregarImagenConTextoEnId("./imagenes/Muneco.png", "Ningun mensaje fue encontrado","resultadoTexto");
    }
}

    function desencriptar() {
        var frase = document.getElementById("insercionTexto").value.toLowerCase();
    
        var insercionTexto = frase.replace(/enter/img, "e");
        var insercionTexto = insercionTexto.replace(/ober/img, "o");
        var insercionTexto = insercionTexto.replace(/imes/img, "i");
        var insercionTexto = insercionTexto.replace(/ai/img, "a");
        var insercionTexto = insercionTexto.replace(/ufat/img, "u");
    
        if (frase.length != 0) {
            document.getElementById("resultadoTexto").innerHTML = insercionTexto;
        } else  {
            agregarImagenConTextoEnId("./imagenes/Muneco.png", "Ningun mensaje fue encontrado","resultadoTexto");
        }
}

function copiar() {
    var contenido = document.querySelector("#resultadoTexto");
    contenido.select();
    document.execCommand("copy");
    }

