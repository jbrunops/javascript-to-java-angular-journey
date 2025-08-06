const verificarComida = (quantidade) => {
  return new Promise((resolve, reject) => {
    if (quantidade -= 1800){
      resolve(`Ótimo, você está dentro dos limites permitidos: ${quantidade}`);
    }else{
      reject(`Cuidado! Você está comendo mais do que deveria: ${quantidade}`);
    };
  });
}

verificarComida(1500)
.then((verificar) => {
  console.log("Tudo certo!", verificar);
})
.catch((err) => {
  console.log("Erro!", err);
})
