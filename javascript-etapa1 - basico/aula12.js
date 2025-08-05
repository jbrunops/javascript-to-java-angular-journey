function construir(){
  return new Promise((resolve, reject) => {
    console.log("Pedido recebido!");

    setTimeout(() => {
      const temosIngredientes = true;

      if(temosIngredientes){
        const pizzaPronta = { sabor: "Calabresa", tamanho: "Grande" };
      }else{
        reject("FALTAM INGREDIENTES!");
      };
    }, 6000);
  });
};

const minhaPromessa = construir();

minhaPromessa
.then((pizzaQueReceberam) => {
  console.log(pizzaQueReceberam);
})
.catch((mensagemDeErro) => {
  console.log(mensagemDeErro);
});