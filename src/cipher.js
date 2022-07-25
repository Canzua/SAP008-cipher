const cipher = {encode}

function encode(texto, deslocar){
let mensagem = "";

for (let i = 0; i < texto.length; i++){ 
  let charCodeAt = "";
  console.log(texto[i].charCodeAt());
  let cifrar = ((texto.charCodeAt(i) +65 + deslocar)%26 ) + 65;
  mensagem += String.fromCharCodeAt(cifrar += deslocar);
  console.log("mensagem", i)
}


return mensagem;
}



export default cipher;

//console.log(codigoDaletra + deslocamento) % + tamDoAlfabeto;