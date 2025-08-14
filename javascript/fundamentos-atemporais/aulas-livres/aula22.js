const minhaPizzaria = {
  nome: "La Notte",
  gastosDoMes: 1200,
};

const controlarGastos = (pizzaria) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { nome, gastosDoMes } = pizzaria;
      const limiteDeGastos = 1000;
      if (gastosDoMes <= limiteDeGastos){
        resolve(`A pizzaria ${nome} teve ${gastosDoMes} de gastos e está dentro do limite!`);
      }else{
        reject(`A pizzaria ${nome} teve ${gastosDoMes} de gastos e está fora do limite de gastos!`);
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