// Criar um cenário onde uma tarefa dependa da outra!
// Cenário para montar uma pizza especial para um cliente!

const buscarClienteNoDB = (idCliente) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`1 --- Bucando cliente ${idCliente} no DB...`);
      resolve({
        id: idCliente, nome: "Junior Brandão", vip: true,
      }, 2000);
    });
  });
};

const bucarIngredienteSegreco = (cliente) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cliente.vip){
        console.log(`2 --- Cliente ${cliente.nome} é VIP! Buscando ingrediente...`);
        resolve("Queijo extra especial da flórida!");
      }else{
        reject("CLiente não é VIP!");
      }
    }, 2000);
  });
  };

  const montarPizzaEspecial = async (idCliente) => {
    console.log(`\n--- Montando pizza para cliente ${idCliente}`);
    try{
      const cliente = await buscarClienteNoDB(idCliente);
      const ingrediente = await buscarIngredienteSecreto(cliente);
      console.log(`3 --- Pizza especial para ${cliente.nome} montada com ${ingrediente}`);
      return "Pizza Pronta!";
    }catch(err){
      console.log(`Houve um problema: ${err}`);
      return "Falha na montagem!";
    }
  };

  montarPizzaEspecial(100);
