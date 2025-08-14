const numeros = (numero) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(numero % 2 === 0){
        resolve(`O número é par: ${numero}!`)
      }else{
        reject(`O número é impar: ${numero}!`)
      }
    }, 2000);
  });
};

numeros(41)
.then(resultado => {
  console.log("Deu certo!", resultado)
})
.catch(erro => {
  console.log("Deu errado!", erro)
})