
interface IPizza {
  id: number;
  nome: string;
  ingredientes: string[];
  preco: number;
  ehVegetariana: boolean;
};

const cardapio: IPizza[] = [
  {
    id: 1,
    nome: "Margherita",
    ingredientes: ["Molho de tomate", "mussarela", "majericão"],
    preco: 35.00,
    ehVegetariana: true
  },
  {
    id: 2,
    nome: "Calabresa",
    ingredientes: ["Molho de tomate", "mussarela", "calabresa", "cebola"],
    preco: 40.00,
    ehVegetariana: false
  },
  {
    id: 3,
    nome: "4 Queijos",
    ingredientes: ["Mussarela", "parmesão", "Gorgonzola", "provolone"],
    preco: 45.00,
    ehVegetariana: true
  },
  {
    id: 4,
    nome: "Portuguesa",
    ingredientes: ["Molho de tomate", "mussarela", "presunto", "ovo", "cebola"],
    preco: 42.00,
    ehVegetariana: false
  }
];

console.log("--- Listagem de todas as pizzas! ---");

const menuSimples = cardapio.map(pizza => {
  const { nome, preco } = pizza;
  return `Nome: ${nome} - Preço: R$ ${preco.toFixed(2)}`;
});
console.log(menuSimples);

console.log("\n--- Apenas Pizzas Vegetarianas! ---");

const pizzasVegetarianas = cardapio.filter(pizza => {
  return pizza.ehVegetariana === true;
});
console.log(pizzasVegetarianas);

console.log("\n--- Pizzas Para Editar! ---");

const pizzaParaEditar = cardapio.find(pizza => {
  return pizza.id === 3;
});
console.log(pizzaParaEditar);