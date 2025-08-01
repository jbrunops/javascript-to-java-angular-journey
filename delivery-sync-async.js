const fs = require('fs');

console.log("-----------------------------");
console.log("INICIANDO O DIA NO DELIVERY");
console.log("-----------------------------");

console.log("Pedir para ler cardápio!");

const cardapioSync = fs.readFile('./cardapio.txt', 'utf8', (error, cardapioSync) =>{
  if(error){
    console.log("ERRO AO LER CARDÁPIO!");
    return;
  }
  console.log(">>> AQUI ESTÁ O CARDÁPIO!", error)
});
console.log("ENQUANTO ELE LER, VOU ATENDER O TELEFONE!");