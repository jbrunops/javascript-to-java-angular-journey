const pedidosDaPizzaria = [
  { id: 1, nome: "Caio", divida: 0, saldo: 0 },
  { id: 2, nome: "Lucas", divida: 0, saldo: 12 },
  { id: 3, nome: "Pedro", divida: 0, saldo: 15 },
  { id: 4, nome: "Santiago", divida: 0, saldo: 15 },
  { id: 5, nome: "Maria", divida: 0, saldo: 15 },
]

const verificarIndividados = pedidosDaPizzaria.filter((verificar) => {
  return verificar.divida > 0;
});

if (verificarIndividados.length > 0){
  console.log("Atenção! Clientes com dívidas pendentes!")

  verificarIndividados.forEach((verificar) => {
    console.log(`-- ${verificar.nome} está devendo R$ ${verificar.divida}`);
  });
}else{
  console.log("Ótima notícias! Nenhum cliente está devendo.")
}

