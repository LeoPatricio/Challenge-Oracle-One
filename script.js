const inputText = document.querySelector(".inputText");
const message = document.querySelector(".result")

function btnCriptografar(){
    const textCriptado = criptografar(inputText.value);
    message.value = textCriptado;
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
    const textDescriptado = criptografar(inputText.value);
    message.value = textDescriptado
}

function desCriptografar(stringDescriptografada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringDescriptografada.includes(matriz[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }

    return stringDescriptografada;
}




