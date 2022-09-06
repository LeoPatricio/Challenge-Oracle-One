const btnCopy = document.querySelector(".btnCopy");
const divTemp = document.querySelector(".divTemp");
const inputText = document.querySelector(".inputText");
const message = document.querySelector(".output");

function btnCriptografar(){
    const textCriptado = criptografar(inputText.value);
    message.value = textCriptado;
    showDisplay()
}


function criptografar(stringCriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptada = stringCriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringCriptada.includes(matriz[i][0])){
            stringCriptada = stringCriptada.replaceAll(matriz[i][0], matriz[i][1])
        }
    }

    return stringCriptada;
}


function btnDescriptografar(){
    const textCriptado = descriptar(inputText.value)
    message.value = textCriptado;
}
    
function descriptar(stringDescriptada) {
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();
    
    for(let i=0; i < matriz.length; i++) {
        if(stringDescriptada.includes(matriz[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    
    return stringDescriptada;
}

function copy() {
    const texCopy = document.querySelector(".output");
    texCopy.select();
    navigator.clipboard.writeText(texCopy.value)
    texCopy.value = texCopy.value;
}

function showDisplay(){
    divTemp.style.display = "none";
    btnCopy.style.display = "flex";
    message.style.display = "flex";
}

