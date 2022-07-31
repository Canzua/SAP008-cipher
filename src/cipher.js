const cipher = {encode, decode}

  function encode(deslocar, texto) {

    if (typeof deslocar != "number") {
     throw TypeError()
    }

    if (typeof texto != "string") {
      throw TypeError()
    }

    let mensagem = "";
    for (let i = 0; i < texto.length; i++) {
      const cifrar = (texto.charCodeAt(i) -65 + deslocar) % 26 + 65;
      mensagem += String.fromCharCode(cifrar);
    }

    return mensagem;
  }

function decode(deslocar, texto) {
   if (typeof deslocar != "number") {
      throw TypeError()
    }

    if (typeof texto != "string") {
      throw TypeError()
    }
    const mensagem = encode(-deslocar, texto)

    return mensagem;
  }

export default cipher;
