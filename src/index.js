import cipher from './cipher.js';

function fnCifrar () {
    let texto =  document.getElementById(" boxCifrar").value ;
    console.log("texto");
    let deslocar = document.getElementById(" deslocamento").value;
    let cifra = cipher.encode(texto, deslocar);
    document.getElementById("boxCifrar").value = cifra;
}

    document.getElementbyId(btnSubmit).addEventListener("click", fnCifrar);






 
// console.log(codigoDaletra + deslocamento) % + tamDoAlfabeto;
// document.getElementById("btnSubmit").onclick = function funcao1() ;
// document.getElementbyId(btnSubmit).addEventListener("click", fnCifrar);

//function myFunction() {
  //  document.getElementById("demo").innerHTML = "Hello World";
 // }