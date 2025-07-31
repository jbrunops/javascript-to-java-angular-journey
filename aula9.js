const pedidos = [
  { id: 10, cliente: "Ana", valor: 50, pizza: "Calabresa" },
  { id: 11, cliente: "Bruno", valor: 60, pizza: "6 Queijos" },
  { id: 13, cliente: "Carol", valor: 99, pizza: "Especial Camarão"}
];

// const listaDePizzas = pedidos.map((pedido) => {
//   return pedido.pizza;
// });

// console.log("--- USANDO MAP ---");
// console.log(listaDePizzas);

console.log("--- USANDO FILTER ---");

const pedidosCaros = pedidos.filter((pedido) => {
  return pedido.valor > 55;
})

console.log(pedidosCaros);