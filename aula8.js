// const pizzaDeQueijo = {
//   molho: "Tomate",
//   queijo: "Mussarela"
// };

// const pizzaDeNutella = {
//   base: "Chocolate",
//   calda: "Morando"
// };

// const pedidoDoCLiente = {
//   ...pizzaDeQueijo,
//   delivery: 2.50,
// };

// console.log(pedidoDoCLiente);

console.log("--- Spread em Arrays ---");

const refrigerantes = [
  "coca-cola",
  "guaraná"
];

const sucos = [
  "laranja",
  "abacaxi"
];

const cardapioDeBebidas = [
  ...refrigerantes,
  ...sucos,
  "Água Mineral"
];

console.log("--- RESULTADO ---");
console.log(cardapioDeBebidas);