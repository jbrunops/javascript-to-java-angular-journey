function criarCliente(nome, telefone){
  const novoCliente = {
    nome: nome,
    telefone: telefone,
    pontosFidelidade: 0,
    adicionarPontos: function(pontosGanhos){
      this.pontosFidelidade += pontosGanhos;
      console.log(`${this.nome} ganhou ${pontosGanhos} pontos! Total: ${this.pontosFidelidade}`);
    }
  };
  return novoCliente;
}

const cliente1 = criarCliente("João", "111-222");
const cliente2 = criarCliente("Maria Souza", "333-999");

cliente1.adicionarPontos(20);
cliente2.adicionarPontos(200);

console.log(cliente1);
console.log(cliente2);