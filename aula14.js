const verificarNumero = (numero) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(numero % 2 === 0){
        resolve(`PAR! ${numero}`);
      }else{
        reject(`ÌMPAR! ${numero}`);
      }
    }, 2000);
  });
};

verificarNumero(30)
.then((resultado) => {
  console.log("DEU CERTO! ",resultado);
})
.catch((erro) => {
  console.log("ERRO! ", erro);
});

const checarNumero = async (numeroParaChecar) => {
  console.log(`Iniciando checagem para ${numeroParaChecar}`);

  try{
    const resultado = await verificarNumero(numeroParaChecar)
    console.log("A promessa foi cumprida!")
    console.log(resultado);
  }catch (erro){
    console.log("A promessa foi quebrada!")
    console.log(erro);
  }
};

checarNumero(10);
checarNumero(5);
