console.log("--- aula 6 - Desestruturação ---");

const filialCentro = {
  nome: "Pizza Central",
  faturamento: 5500,
  ativa: true,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo"
  }
};

const { nome, faturamento, endereco: { rua, cidade } } = filialCentro;

console.log(`A filial ${nome}, tem um faturamento de ${faturamento}!`);
console.log(`A filial ${nome} fica na rua ${rua}, na cidade ${cidade}!`);