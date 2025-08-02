console.log("--- CLiente: vou ligar para a pizzaria... ---");

function fazerPedidoDePizza(){
  return new Promise((resolve, reject) => {
    console.log("--- Seu pedido foi anotado! ---");

    setTimeout(() => {
      const pizzaPronta = true;

      if(pizzaPronta){
        resolve("Aqui está a pizza!");
      }else{
        reject("Desculpe, o forno quebrou!");
      }
    }, 6000);
  });
}

const promessaDaPIzza = fazerPedidoDePizza();

console.log("Ótimo, tenho a promessa!");

promessaDaPIzza
.then((resultadoDaPromessa) => {
  console.log(`--- O entregador chegou! ---`);
  console.log(`Entregador: ${resultadoDaPromessa}`);
  console.log("Cliente diz: Que pena, vou pedir outro lanche!");
})