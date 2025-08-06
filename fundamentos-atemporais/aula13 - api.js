const axios = require('axios');

const promessaDoPokemon = axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');

console.log("Pedido de busca enviado!");

promessaDoPokemon
.then( (resposta) => {
  const pokemon = resposta.data;
  console.log(`\nENCONTRADO! É o ${pokemon.name.toUpperCase()}`);
  console.log(`Ele tem ${pokemon.abilities.length} habilidades!`);
})
.catch( (erro) => {
  console.error(`\nDEU RUIM!`);
  console.error(`MOTIVO: ${erro.message}`);
});

console.log("Enquanto a busca acontece, nosso programa continua rodando aqui!")






// funcaoQuePrometeAlgo(argumentos)
// .then( (resultadoDoSucesso) => {

// })
// .catch( (motivoDoErro) =>{
  
// } )