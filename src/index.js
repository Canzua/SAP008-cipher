import cipher from './cipher.js';

const texto = document.getElementById("boxCifrar");
const deslocar = document.getElementById("deslocamento")

function fnCifrar(event) {
   event.preventDefault();
   const offset = deslocar.valueAsNumber;
   const mensagem = texto.value.toUpperCase();
   const cifra = cipher.encode(mensagem, offset);
   document.getElementById("boxReceber").value = cifra;
}

function fnDecifrar(event) {
   event.preventDefault();
   const mensagem = texto.value.toUpperCase();
   const offset = deslocar.valueAsNumber;
   const decifra = cipher.decode(mensagem, offset);
   document.getElementById("boxReceber").value = decifra;
}

document.getElementById("btnSubmit").addEventListener("click", fnCifrar);
document.getElementById("btnSubmit2").addEventListener("click", fnDecifrar);




