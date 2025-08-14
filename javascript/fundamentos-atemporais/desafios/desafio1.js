// NOSSA FERRAMENTA!

// CRIANDO A PLANTA
const verificarSeNumeroEhPar = (numero) =>{
  // A PROMRESSA DO RESULTADO
  // Erro cometido aqui: (newPromise deve ser new Promise) ❌
  return new Promise( (resolve, reject) =>{

    console.log(`Iniciando verificação para o número ${numero}...`);

    // PEDIDO DA TAREFA
    setTimeout(() => {

      // A LÓGICA DE NEGÓCIO
      if(numero % 2 === 0){
        // Se o número é par, a operação foi um sucesso!
        resolve(`Sucesso! O número ${numero} é par!`);
      }else{
        // Se o número é impar, a operação foi uma falha!
        reject(`Falha! O número ${numero} é impar.`)
      }
    }, 6000);
  });
};

// USAR A FERRAMENTA AGORA!

console.log("VAMOS VERIFICAR!");

// Vamos pegar a máquina e ligar!
const promessaDoNumero10 = verificarSeNumeroEhPar(10);

// agora observamos o que vai acontecer!
promessaDoNumero10
.then( (mensagemDeSucesso) => {
  // Só vai rodar se for sinal verde
  console.log(mensagemDeSucesso);
})
.catch( (mensagemDeErro) => {
  console.log(mensagemDeErro);
});

console.log("VAMOS VERIFICAR - 2");

verificarSeNumeroEhPar(17)
.then( (resultado) => {
  console.log(resultado);
})
.catch( (erro) =>{
  console.log(erro);
});