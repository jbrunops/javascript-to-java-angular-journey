const pizzaDeQueijo = {
  molho: "Tomate",
  queijo: "Mussarela"
};

const pizzaDeNutella = {
  base: "Chocolate",
  calda: "Morando"
};

const pedidoDoCLiente = {
  ...pizzaDeQueijo,
  delivery: 2.50,
};

console.log(pedidoDoCLiente);