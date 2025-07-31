const pedidos = [
  { id: 10, cliente: "Ana", valor: 50, pizza: "Calabresa" },
  { id: 11, cliente: "Bruno", valor: 60, pizza: "6 Queijos" },
  { id: 13, cliente: "Carol", valor: 99, pizza: "Especial Camarão"}
];

console.log("--- USANDO O FIND ---");
const pedidoDoBruno = pedidos.find((pedido) =>{
  if (pedido.id === 11){
    return "Ótimo! Você escolheu 11";
  }else if (pedido.id === 13){
    return "Legal, você escolheu 13";
  }else{
    return "Nenhum dos números escolhidos!";
  }
});

console.log(pedidoDoBruno);