// // const pizzaDeQueijo = {
// //   molho: "Tomate",
// //   queijo: "Mussarela"
// // };

// // const pizzaDeNutella = {
// //   base: "Chocolate",
// //   calda: "Morando"
// // };

// // const pedidoDoCLiente = {
// //   ...pizzaDeQueijo,
// //   delivery: 2.50,
// // };

// // console.log(pedidoDoCLiente);

// console.log("--- Spread em Arrays ---");

// const refrigerantes = [
//   "coca-cola",
//   "guaraná"
// ];

// const sucos = [
//   "laranja",
//   "abacaxi"
// ];

// const cardapioDeBebidas = [
//   ...refrigerantes,
//   ...sucos,
//   "Água Mineral"
// ];

// console.log("--- RESULTADO ---");
// console.log(cardapioDeBebidas);

console.log("--- REST OPERATOR ---");

const filaDePedidos = ["Pedido 1", "Pedido 2", "Pedido 3", "Pedido 4", "Pedido 5",];

const [primeiroPedido, ...outrosPedidos] = filaDePedidos;

console.log("--- RESULTADO ---");
console.log(`O primeiro pedido para entrega: ${primeiroPedido}`);
console.log(`O resto dos pedidos para entrega: ${outrosPedidos}`);

