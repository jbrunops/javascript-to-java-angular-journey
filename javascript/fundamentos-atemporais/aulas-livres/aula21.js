const assarPizza = (sabor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const energiaAcabou = false;
      if(!energiaAcabou){
        resolve(`Pizza de ${sabor} está pronta!`);
      }else{
        reject(`A energia acabou! Pizza queimou!`)
      };
    }, 3000);
  });
};

const iniciarJanta = async () => {
  try{
    const resultado = await assarPizza('calabresa');
    console.log("Oba, a janta chegou!")
    console.log(resultado);
  }catch(err){
    console.log("Que pena, vou pedir outro lanche!")
    console.log(err);
  }
}

iniciarJanta()