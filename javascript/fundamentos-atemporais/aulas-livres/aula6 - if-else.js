const pedidosDaPizzaria = [
  { id: 1, nome: "Marta", valor: 100, divida: 34 },
  { id: 2, nome: "Juliana", valor: 78, divida: 54 },
  { id: 3, nome: "Fabiano", valor: 230, divida: 67 },
  { id: 4, nome: "Cristina", valor: 41.23, divida: 234 },
  { id: 5, nome: "Caio", valor: 103, divida: 28 },
  { id: 6, nome: "Cícero", valor: 1022, divida: 233}
];

const descobrirIdEspecifico = pedidosDaPizzaria.find((selecionar) => {
  return selecionar.id === 5;

  // if (selecionar.id === 5){
  //   console.log(`O ID que estávamos procurando era ${selecionar.id}`);
  // }else{
  //   console.log("Não enconstramos o que estávamos procurando!")
  // }
});

console.log(descobrirIdEspecifico);

// const verificarDivida = pedidosDaPizzaria.filter((verificar) => {
//   if (verificar.divida > 0){
//     console.log(`Os individados são: ${verificar.nome}`);
//   }else{
//     console.log("Ninguém está devendo nada.")
//   }
// });

// console.log(verificarDivida);

// const listaParaEntregadorCobrar = pedidosDaPizzaria.map((cobrar) => {
//   return cobrar.valor;
// });

// forma mais curta!

// const listaParaEntregadorCobrar = pedidosDaPizzaria.map(cobrar => cobrar.valor);

// console.log(listaParaEntregadorCobrar);