
let decryptedFalse = document.getElementById('decrypted__false');
let decryptedTrue = document.getElementById('decrypted__true');
/*  1. Create a variable that can contain the encrypted text so it can be pass to other functions -
without executing the encryptProcess.method
    2. Change the name of encryptProcess to something more suitable since I will append the decrypt function
*/

let encryptProcess = {
    
    encrypt : function encrypt(){
        const textarea = document.getElementById('input').value;
        decryptedFalse.style.display = "none"; 
        decryptedTrue.style.display = "flex";
        let invalidPattern = /A-ZÁÉÍÓÚÑ/;
        if (!invalidPattern.test(textarea)){
            const encryptedText = textarea
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g,"ober")
                .replace(/u/g, "ufat");
            document.getElementById('decrypted__text3').textContent = encryptedText;
            console.log(encryptedText + " = encrypt method");
            return encryptedText;
        }
        else{
            document.getElementById('decrypted__text3').textContent = "Error! You must not include uppercase letters or accents.";
            console.log("Error! You must not include uppercase letters or accents.");
        }
    }
    
}

function decrypt(){
    decryptedFalse.style.display = "none"; 
    decryptedTrue.style.display = "flex";

    const textarea = document.getElementById('input').value; 
    const decryptedText = textarea
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    console.log(decryptedText);
    document.getElementById('decrypted__text3').textContent = decryptedText;
}

function copy(){
    const textarea = encryptProcess.encrypt(); /*withouth value to be able to use the select() method. we need to get the actual element.*/
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textarea;
    document.body.appendChild(tempTextarea)
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);
    console.log(textarea + "worked");
}

function resetTextArea (){

}

function resetDecryptedArea(){

}

function showAlert(message, duration = 3000) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message;
    alertBox.classList.remove('hidden');

    setTimeout(() => {
        alertBox.classList.add('hidden');
    }, duration);
}

// Example usage:
showAlert("This is a non-blocking alert message!", 3000);
