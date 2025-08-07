// Sistema de locadora - desafio 4

//1 - Obsetos e arrays: para guardar nosso catálogo;
//2 - Funções: para representar as ações de registrar e alugar;
//3 - .find() e .push(): para buscar e adicionar dados nas nossas listas;
//4 - if/else e operadores lógicos: para as regras de negócio (disponibilidade!);
//5 - Promise e async/await: para gerenciar a tarefa "lenta" de alugar uma fita!;
//6 - try/catch: para lidar com problemas (cliente não encontrado ou fita já alugada.)

console.log("--- Bem-vindo ao sistema da Locadora de VHS ---")

// banco de dados VHS

const catalogoVHS = [
  { id: 1, titulo: "O rei leão", disponivel: true },
  { id: 2, titulo: "Jurassic Park", disponivel: true },
  { id: 3, titulo: "Titanic", disponivel: true },
  { id: 4, titulo: "Matrix", disponivel: false },
  { id: 5, titulo: "Pulp Fiction", disponivel: true },
  { id: 6, titulo: "Forrest Gump", disponivel: true },
];

//  banco de dados CLIENTES

const clientes = [
  { id: 1, nome: "Joana Silva", fitasAlugadas: ["Matrix"] }
];

// função para cadastrar novo cliente

const registrarCliente = (nomeCliente) => {
  const novoCliente = {
    id: clientes.length + 1,
    nome: nomeCliente,
    fitasAlugadas: []
  };
  clientes.push(novoCliente);
  console.log("Cliente registrado com sucesso!");
};

// atendente agora vai buscar a fita, verificar, dar baixa

const alugarVHS = (nomeCliente, tituloFita) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cliente = clientes.find(c => c.nome === nomeCliente);
      const fita = catalogoVHS.find(vhs => vhs.titulo === tituloFita);
      if(!cliente){
        reject(`ERRO: Cliente ${nomeCliente} não encontrado no sistema!`);
        return; // para não continuar executando?! 
      }
      if(!fita){
        reject(`ERRO: Fita ${tituloFita} não encontrada no catálogo!`);
        return;
      }
      if(!fita.disponivel){
        reject(`ERRO: Fita ${tituloFita} já está alugada!`);
        return;
      }
      fita.disponivel = false;
      cliente.fitasAlugadas.push(tituloFita);
      resolve(`SUCESSO! ${cliente.nome} alugou ${fita.titulo}`);
    }, 3000);
  });
};

// expediente

const simularExpediente = async () => {
  console.log("\n-------------------------------");
  console.log("A LOCADORA ABRIU! ESTE É O ESTADO INCIAL:")
  console.log("Catálogo: ", catalogoVHS);
  console.log("Clientes: ", clientes);
  console.log("-------------------------------");

  try{
    registrarCliente("Bruno");
    
    const resultadoAluguel1 = await alugarVHS("Bruno", "O Rei Leão");
    console.log(resultadoAluguel1);
    
    const resultadoAluguel2 = await alugarVHS("Ana", "Matrix");
    console.log(resultadoAluguel2);

  }catch(erro){
    console.log(`\n ATENDIMENTO INTERROMPIDO!`)
    console.log(erro);
  }

  console.log("\n-------------------------------");
  console.log("FIM DO EXPEDIENTE:")
  console.log("Catálogo: ", catalogoVHS);
  console.log("Clientes: ", clientes);
  console.log("-------------------------------");
}

simularExpediente();