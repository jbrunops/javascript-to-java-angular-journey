const pedidos = [
  { id: 10, cliente: "Ana", valor: 50, pizza: "Calabresa" },
  { id: 11, cliente: "Bruno", valor: 60, pizza: "6 Queijos" },
  { id: 13, cliente: "Carol", valor: 99, pizza: "Especial Camarão"}
];

const listaDePizzas = pedidos.map((pedido) => {
  return pedido.pizza;
});

console.log(listaDePizzas);