console.log("--- DELIVERY ABERTO! ---")

const delivery = {
  comedoria: {
    nome: "Delivery da Lucia",
    estoque: {
      hotdog: 10,
      paoNaChapa: 10,
      pizza: 20,
    },
    pedidosDoDia: 0,
    caixa: 100,
  },
  bebidas: {
    nome: "Beba Mais",
    estoque: {
      refri: 100,
      alcool: 20,
      agua: 200,
    },
    pedidosDoDia: 0,
    caixa: 200,
  },
};

const fazerPedidos = (estabelecimento, itemDelivery, valorDoPedido) => {
  console.log(`Recebendo o pedido de ${itemDelivery} no valor de ${valorDoPedido}...`);

  if(estabelecimento.estoque[itemDelivery] > 0){
    console.log(`Show! ${itemDelivery} em estoque. Processando...`);

    estabelecimento.caixa += valorDoPedido;
    estabelecimento.estoque[itemDelivery] -= 1;
    estabelecimento.pedidosDoDia += 1;

    console.log(`Pedido finalizado! Estoque de ${itemDelivery} agora é ${estabelecimento.estoque[itemDelivery]}`);
  }else{
    console.log(`Desculpe, estamos sem ${itemDelivery} no estoque!`);
  };
};

console.log("--- NOSSO ESTOQUE ATUAL ---");
console.log(delivery);

// primeiro pedido
fazerPedidos(delivery.bebidas, 'refri', 40);