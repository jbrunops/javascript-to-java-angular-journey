const qualPizzariaFaturouMais = (pizzariaDoBairro, pizzariaDoCentro) => {
  return new Promise((resolve, reject) => {
    if (pizzariaDoBairro > pizzariaDoCentro){
      resolve(`PIZZARIA DO BAIRRO FATUROU: ${pizzariaDoBairro}`);
    }else{
      reject(`PIZZARIA DO CENTRO FATUROU: ${pizzariaDoCentro}`)
    }
  }, 3000);
};

qualPizzariaFaturouMais(100, 4000)
.then((verificarValores) => {
  console.log("Verificado! ", verificarValores);
})
.catch((erro) => {
  console.log("Erro! ", erro);
});