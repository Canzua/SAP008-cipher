const cipher = { encode, decode }

function encode(deslocar, texto) {
    if (typeof texto != "string" || texto ==="") {
      throw new TypeError("mensagem inválida");
   }
    if (typeof deslocar!= "number" || deslocar === 0) {
      throw new TypeError("deslocamento inválido");
    }
    let mensagem = "";
    for (let i = 0; i < texto.length; i++) {
      const cifrar = (texto.charCodeAt(i) +65 + deslocar) %26 + 65;
      mensagem += String.fromCharCode(cifrar);
    }
    
    return mensagem;

  }

  function decode(deslocar, texto) {
 
    const mensagem = encode(-deslocar, texto)

    return mensagem;
  }

export default cipher;