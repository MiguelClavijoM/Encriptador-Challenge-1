function encriptarTexto(text){
    return text
    .replaceAll("e", "enter") 
    .replaceAll("i", "imes") 
    .replaceAll("a", "ai") 
    .replaceAll("o", "ober") 
    .replaceAll("u", "ufat");
}

function desencriptarTexto(text){
    return text
    .replaceAll("enter", "e") 
    .replaceAll("imes", "i") 
    .replaceAll("ai", "a") 
    .replaceAll("ober", "o") 
    .replaceAll("ufat", "u");
}

let botonDesencriptar = document.getElementById("desencriptar");

let textarea = document.getElementById("text-area");
let parrafo = document.getElementById("parrafo");

let initial = document.getElementById("initial");
let final = document.getElementById("final");

final.style.display = "none" 

let botonEncriptar = document.getElementById("encriptar");

botonEncriptar.addEventListener('click',() => {
    parrafo.value = encriptarTexto(textarea.value) 
    initial.style.display = "none";
    final.style.display = "flex";
})

botonDesencriptar.addEventListener('click',() => {
    parrafo.value = desencriptarTexto(textarea.value)
    initial.style.display = "none";
    final.style.display = "flex";
})

let botonCopiar = document.getElementById("copiar");

function copiarTexto() {
    parrafo.select();
    navigator.clipboard.writeText(parrafo.value);
}

botonCopiar.addEventListener('click', () => {
    copiarTexto();
    botonCopiar.innerText = "Texto copiado!"
    setTimeout(()=>{
        botonCopiar.innerText = "Copiar"
    }, 1000)
})

function soloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "abcdefghijklmnopqrstuvwxyz";

especiales = [8,13,32];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar sólo letras minúsculas y sin acentos");
 return false;
}
}

