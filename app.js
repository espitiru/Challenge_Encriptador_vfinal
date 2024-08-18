"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const textArea = document.querySelector(".text-area");
    const messageArea = document.querySelector(".mensaje");
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const btnCopiar = document.querySelector(".btn-copiar");

    function encriptar(texto) {
        let encriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return encriptado;
    }

    function desencriptar(texto) {
        let desencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return desencriptado;
    }

    function actualizarMensaje(texto) {
        if (texto.trim() === "") {
            messageArea.value = "";
            messageArea.classList.add("Ingresa el texto");
        } else {
            messageArea.classList.remove("Ingresa el texto");
        }
    }

    btnEncriptar.addEventListener("click", function () {
        const texto = textArea.value;
        const textoEncriptado = encriptar(texto);
        messageArea.value = textoEncriptado;
        actualizarMensaje(textoEncriptado);
    });

    btnDesencriptar.addEventListener("click", function () {
        const texto = textArea.value;
        const textoDesencriptado = desencriptar(texto);
        messageArea.value = textoDesencriptado;
        actualizarMensaje(textoDesencriptado);
    });

    btnCopiar.addEventListener("click", function () {
        messageArea.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    });

    // Verificar el contenido inicial
    actualizarMensaje(textArea.value);
});
