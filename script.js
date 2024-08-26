
let decryptedFalse = document.getElementById('decrypted__false');
let decryptedTrue = document.getElementById('decrypted__true');
let coppyButton = document.getElementById('button-copy');
let alertMessageRed = document.getElementById('red-alert');
let alertMessageCopy = document.getElementById('copy-alert');
let invalidPattern = /[A-ZÁÉÍÓÚÑáéíóúñ]/;

let encryptProcess = {
    
    encrypt : function () {
        const textarea = document.getElementById('input').value;
        decryptedFalse.style.display = "none"; 
        decryptedTrue.style.display = "flex";
        coppyButton.style.display = "block"
        if (!invalidPattern.test(textarea)){
            const encryptedText = textarea
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g,"ober")
                .replace(/u/g, "ufat");
                document.getElementById('decrypted__text3').textContent = encryptedText;
                console.log(encryptedText + " = encrypt method");    
            }
            else{
                coppyButton.style.display = "none"
                alertMessageRed.style.display = "flex";
                document.getElementById('decrypted__text3').textContent = "¡Error! Solo se aceptan letras en minúscula y sin acento.";
                showAlert("¡Error! Solo se aceptan letras en minúscula y sin acento.", 'red-alert', 4000);
        }
    },

    decrypt : function () {
        const textarea = document.getElementById('input').value;
        decryptedFalse.style.display = "none"; 
        decryptedTrue.style.display = "flex";
        coppyButton.style.display = "block"
        
        const decryptedText = textarea
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        
    
        console.log(decryptedText + " = dencrypt method");  
        document.getElementById('decrypted__text3').textContent = decryptedText;
    }
}

function copy(){
    textToCopy = document.getElementById("decrypted__text3").textContent;
    
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy
    document.body.appendChild(tempTextArea) //Adds the tag in the HTML//
    
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    console.log(textToCopy +' = copy function');

    alertMessageCopy.style.display = "flex";

    showAlert("Texto copiado al portapapeles", 'copy-alert', 3000);
}

function resetTextArea (){
    document.getElementById("input").value = '';
}

function resetDecryptedArea(){
    decryptedFalse.style.display = "flex"; 
    decryptedTrue.style.display = "none";
    coppyButton.style.display = "block"
}

function showAlert(message, alertType, duration = 3000) {
const alertBox = document.getElementById(alertType);
alertBox.textContent = message;
alertBox.classList.remove('hidden');
    
    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, duration);
}