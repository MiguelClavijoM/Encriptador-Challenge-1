function encriptarTexto(text){
    return text.split("").reverse().join("")
}


let textarea = document.getElementById("text-area")
let parrafo = document.getElementById("parrafo")

let initial = document.getElementById("initial")
let final = document.getElementById("final")

final.style.display = "none" 

let botonEncriptar = document.getElementById("encriptar")

botonEncriptar.addEventListener('click',() => {
    console.log("Me hicieron click", textarea.value)
    parrafo.innerText = textarea.value
    initial.style.display = "none";
    final.style.display = "flex";
})

let ejecutar = encriptarTexto(parrafo.innerText);
console.log(ejecutar);

