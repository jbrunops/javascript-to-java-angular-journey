function criarCliente(nome, telefone){
  const novoCLiente = {
    nome: nome,
    telefone: telefone,
    pontosFidelidade: 0
  };
  console.log("Dentro da função: criei o cliente", novoCLiente.nome);
  return novoCLiente;
}

const cliente2 = criarCliente("Maria Souza", "333-444");

console.log("Fora da função, o que recebemos!?");
console.log(cliente2);