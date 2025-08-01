// const nomeRestaurante = "Pizzaria São Jorge";
// let pedidosHoje = 0;

// pedidosHoje = pedidosHoje + 1;
// console.log(nomeRestaurante, pedidosHoje);

// function abrirCaixa(){
//   if(true){
//     let senha = '1234';
//   }
//   console.log(senha);
// }
// abrirCaixa();

const lanchoneteNorte = [
  { id: 1, lanche: "Hotdog" },
  { id: 2, lanche: "X-burguer" },
  { id: 3, lanche: "Batata Frita" }
];

let pedidosFeitos = 0;

function fazerPedido(idDoLanche){
  const pedido = lanchoneteNorte.find(item => item.id === idDoLanche);

  if(pedido){
    pedidosFeitos++;
    console.log(`Pedido feito ${pedido.lanche}`);
    console.log(`Total de pedidos hoje: ${pedidosFeitos}`);
  }else{
    console.log("Lanche não encontrado!")
  }
}

fazerPedido(1);
fazerPedido(3);