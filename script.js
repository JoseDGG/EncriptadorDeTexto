
let decryptedFalse = document.getElementById('decrypted__false');
let decryptedTrue = document.getElementById('decrypted__true');

function encrypt(){ 
    decryptedFalse.style.display = "none"; 
    decryptedTrue.style.display = "flex";
    
    const textarea = document.getElementById('input').value;
    const encryptedText = textarea
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");
    document.getElementById('decrypted__text3').textContent = encryptedText;
}

function decrypt(){
    decryptedFalse.style.display = "none"; 
    decryptedTrue.style.display = "flex";

    const textarea = document.getElementById('input').value;
    const decryptedText = textarea
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ufat/g, "u");
    console.log(decryptedText);
    document.getElementById('decrypted__text3').textContent = decryptedText;
}

function copy(){

}

function resetTextArea (){

}

function resetDecryptedArea(){

}