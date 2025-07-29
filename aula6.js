// console.log("--- aula 6 - Desestruturação ---");

// const filialCentro = {
//   nome: "Pizza Central",
//   faturamento: 5500,
//   ativa: true,
//   endereco: {
//     rua: "Rua das Flores",
//     numero: 123,
//     cidade: "São Paulo"
//   }
// };

// const { nome, faturamento, endereco: { rua, cidade } } = filialCentro;

// console.log(`A filial ${nome}, tem um faturamento de ${faturamento}!`);
// console.log(`A filial ${nome} fica na rua ${rua}, na cidade ${cidade}!`);

console.log("--- exercício de desestruturação ---");

const pedido = {
  id: 1234,
  nomeCLiente: "João Silva",
  endereco: "Rua da Paz, 42",
  valorTotal: 89.50,
  pagamento: {
    tipo: "Cartão de Crédito",
    bandeira: "Visa"
  }
};

const { nomeCLiente, valorTotal } = pedido;
const { pagamento: { tipo } } = pedido;

console.log(`O cliente ${nomeCLiente} fez um pedido do R$ ${valorTotal} e pagará com ${tipo}`);