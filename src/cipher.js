const cipher =  [encode]

function encode(mensagem, deslocar){
let mensagem = "";
for (let i = 0; i < texto.length; i++){ 
  let cifrar = ((texto.charCodeAt(i) + 65 + deslocar) % 26 ) + 65;
  mensagem += String.fromCharCodeAt(cifrar);
}
console.log("mensagem", i);
return mensagem;
}



export default cipher;

//console.log(codigoDaletra + deslocamento) % + tamDoAlfabeto;