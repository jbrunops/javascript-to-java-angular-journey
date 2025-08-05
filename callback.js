const mensagem = function() {
  console.log("RESULTADO 1")
}

setTimeout(mensagem, 3000);

setTimeout(function(){
  console.log("RESULTADO 2")
}, 4000);

setTimeout(() => {
   console.log("RESULTADO 3")
}, 6000);