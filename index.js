import cipher from './cipher.js';

const texto = document.getElementById("boxCifrar");
const deslocar = document.getElementById("deslocamento")

   function fnCifrar(event) {
      event.preventDefault();
      const offset = deslocar.valueAsNumber;
      const mensagem = texto.value.toUpperCase();
     
      try{ 
         const cifra  = cipher.encode (offset,  mensagem)
         document.getElementById("boxReceber").value = cifra;
      } 
      catch (error){
         alert(error.message)
      }
      
   }

   function fnDecifrar(event) {
      event.preventDefault();
      const offset = deslocar.valueAsNumber;
      const mensagem = texto.value.toUpperCase();
      try{ 
         const decifra = cipher.decode(offset, mensagem);
         document.getElementById("boxReceber").value = decifra;
      }
      catch (error){
         alert(error.message)
      }
   }
   
document.getElementById("btnSubmit").addEventListener("click", fnCifrar);
document.getElementById("btnSubmit2").addEventListener("click", fnDecifrar);