import cipher from './cipher.js';

function fnCifrar (event) {
    event.preventDefault( );

    let texto =  document.getElementById("boxCifrar").value;
    let deslocar = document.getElementById("deslocamento").value;
    console.log(deslocar);
    let cifra = cipher.encode(texto, deslocar);
   document.getElementById("boxCifrar").value;
   document.getElementById("boxReceber").value;
   console.log(texto, deslocar);
}   

    document.getElementById("btnSubmit").addEventListener("click", fnCifrar);





   //event.preventDefault(); sempre colocar para inabilitar a renicialização automatica da pagina.
 

