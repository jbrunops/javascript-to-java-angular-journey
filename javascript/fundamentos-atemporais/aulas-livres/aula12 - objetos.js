const pedidos = [
  { id: 1, nome: "Caio", divida: 10, saldo: 0 },
  { id: 2, nome: "Lucas", divida: 230, saldo: 12 },
  { id: 3, nome: "Pedro", divida: 420, saldo: 15 },
  { id: 4, nome: "Santiago", divida: 1230, saldo: 15 },
  { id: 5, nome: "Maria", divida: 0, saldo: 15 },
];

const inadimplentes = [];
const adimplentes = [];

pedidos.forEach(percorrer => {
  if (percorrer.divida > 0){
    inadimplentes.push(percorrer);
  }else {
    adimplentes.push(percorrer);
  }
});

if (inadimplentes.length > 0){
  console.log("Clientes com dívidas pedentes:");
  inadimplentes.forEach((verificar) => {
    console.log(`--- ${verificar.nome} deve R$ ${verificar.divida}`);
  });
};

if (adimplentes.length > 0){
  console.log("Clientes com o pagamento em dia:");
  adimplentes.forEach((verificar) => {
    console.log(`--- ${verificar.nome} está com tudo pago! Saldo: ${verificar.saldo}`);
  });
};

