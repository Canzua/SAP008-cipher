const cipher = { encode}

function encode(texto, deslocar){
let mensagem = "";
for (let i = 0; i < texto.length; i++){ 
  let cifrar = ((texto.charCodeAt(i) + 65 + deslocar) % 26 ) + 65;
  mensagem += String.fromCharCode(cifrar);
}
console.log("mensagem");
return mensagem;
}



export default cipher;

//console.log(codigoDaletra + deslocamento) % + tamDoAlfabeto;