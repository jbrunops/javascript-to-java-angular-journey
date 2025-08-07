const minhaPizzaria = {
  nome: "La Notte",
  gastosDoMes: 1200,
};

const controlarGastos = (pizzaria) => {
  return new Promise((resolve, reject) => {
    const { nome, gastosDoMes } = pizzaria;
    setTimeout(() => {
      const limiteDeGastos = 1000;
      if (pizzaria.gastosDoMes <= limiteDeGastos){
        resolve(`A pizziria teve ${gastosDoMes} e está dentro do limite!`);
      }else{
        reject(`A pizzaria teve ${gastosDoMes} e está fora do limnite de gastos!`);
      }
    }, 3000);
  });
};

const saberLimite = async () => {
  try{
    const resultado = await controlarGastos(minhaPizzaria);
    console.log(resultado)
  }catch(erro){
    console.log(erro);
  };
};

saberLimite()