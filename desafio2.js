// DESAFIO DA SORVETERIA
// Aumentar a produção caso tenha saída alta em dias diferentes.
// Revisão com objetos, arrays, funções, if/else, métodos de array e promises

// Desafio: É sábado à noite, o expediente está acabando. O gerente precisa analisar
// as vendas do dia para decidir qual sabor de sorvete a cozinha deve produzir
// em maior quantidade para o domingo, que também será um dia de muito movimento.
// A decisão, porém, não é instantânea; ele precisa de um tempo para analisar os relatórios.

// 1 - começar com os estoques
// 2 - depois começar com a lógica de análise
// 3 - depois criar a ferramenta de decisão
// 4 - executar e ver resultado

const estoque = {
  chocolate: 22,
  morango: 10,
  creme: 54
};

// é tipo um registro de vendas diárias sendo registradas!
const vendasDoDia = [
  { sabor: 'chocolate', quantidade: 2 },
  { sabor: 'creme', quantidade: 1 },
  { sabor: 'chocolate', quantidade: 6 },
  { sabor: 'morango', quantidade: 4 },
  { sabor: 'chocolate', quantidade: 5 },
  { sabor: 'chocolate', quantidade: 8 },
  { sabor: 'creme', quantidade: 1 },
  { sabor: 'morango', quantidade: 2},
];

// Máquina de análise agora
const decidirProducaoProximoDia = (estoqueAtual, vendas) => {
  // promessa de decisão futura
  return new Promise((resolve, reject) => {
    // simular o tempo do gerente para analisar o estoque
    setTimeout(() => {

      // exibir
      // Ao exibir sem ! o resultado é vazio. O ! inverte undefined.
      let totalVendido = {};

      // o "venda" é como um "apelido" para vendasDoDia lá no objeto!
      vendas.forEach(venda => {
        if(!totalVendido[venda.sabor]){
          totalVendido[venda.sabor] = 0;
        }
        totalVendido[venda.sabor] += venda.quantidade;
      });

      // agora encontrar o sabor mais vendido
      let saborMaisVendido = '';
      let maiorVenda = 0;
      for (const sabor in totalVendido){
        if(totalVendido[sabor] > maiorVenda){
          maiorVenda = totalVendido[sabor];
          saborMaisVendido = sabor;
        }
      }

      console.log(`O SABOR MAIS VENDIDO FOI: ${saborMaisVendido}`);

      // Regra de negócio para tomar a decisão!
      const estoqueDoMaisVendido = estoqueAtual[saborMaisVendido];
      const estoqueMinimo = 10;

      if(estoqueDoMaisVendido < estoqueMinimo){
        const ordemDeProducao = `PRODUZAM MAIS 5 BALDES DE ${saborMaisVendido}`;
        resolve(ordemDeProducao);
      }else{
        const aviso = `ESTOQUE DE ${saborMaisVendido} está bom (${estoqueDoMaisVendido} baldes). PAREM DE PRODUZIR!`
        reject(aviso);
      }

    }, 6000);
  });
};

// FIM DO EXPEDIENTE PARA EXECUTAR
console.log("ESTOQUE INICIAL: ", estoque);

const promessaDaDecisao = decidirProducaoProximoDia(estoque, vendasDoDia);

promessaDaDecisao
.then((ordem) =>{
  console.log("\n --- RELATÓRIO PARA A COZINHA ---")
  console.log(ordem);
})
.catch((aviso) =>{
  console.log("\n --- AVISO DE ESTOQUE ---");
  console.log(aviso);
});