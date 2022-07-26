const cipher = { encode, decode }

function encode(texto, deslocar) {
  let mensagem = "";
  for (let i = 0; i < texto.length; i++) {
    console.log(texto[i].charCodeAt());
    const cifrar = ((texto.charCodeAt(i) + deslocar) % 26) + 65;
    mensagem += String.fromCharCode(cifrar);

  }

  return mensagem;

}

function decode(texto, deslocar) {
  const mensagem = encode(texto, - deslocar)

  return mensagem;
  
}
export default cipher;
