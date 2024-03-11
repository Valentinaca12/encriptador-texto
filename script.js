const campo_encriptar = document.querySelector("#texto-encriptar");
const campo_encriptado = document.querySelector("#texto-encriptado");

const matriz_code = [
    ["e", "enter"], // indice 0
    ["i", "items"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];

function btnEncriptar() {
    const encriptar = encriptar_texto(campo_encriptar.value);
    campo_encriptado.value = encriptar;
}

function encriptar_texto(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseEncriptada;

}

function btnDesencriptar() {
    const desencriptar = desencriptar_texto(campo_encriptado.value);
    campo_encriptado.value = desencriptar;
}

function desencriptar_texto(fraseDesencriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseDesencriptada.includes(matriz_code[i][1])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseDesencriptada;
}

function validateInput() {
    const textarea = document.getElementById("texto-encriptar");
    const inputValue = textarea.value;
    const validInput = inputValue.replace(/[^a-z\s]/g,"");
    textarea.value = validInput;
  }

function copiar() {
    const copiar = copiar_texto(campo_encriptado.value);
    campo_encriptado.value = copiar;
  }

function copiar_texto(campo_encriptado) {
    navigator.clipboard.writeText(campo_encriptado)
    textarea.value = '';
}






   


