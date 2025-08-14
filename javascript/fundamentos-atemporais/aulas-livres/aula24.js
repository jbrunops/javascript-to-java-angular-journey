const queroViajar = (saldo) => {
    return new Promise((resolve) => {
        const carteira = 2000;
        if(saldo >= carteira){
            resolve("Eu vou viajar!");
        }else{
            reject("Não vai viajar!")
        };
    });
};

const alugarCarro = async () => {
    try{
        const aluguel = queroViajar(saldo);
        console.log(aluguel);
    }catch(erro){
        console.log("Inelizmente estou sem grana pra viajar!")
    }
}

alugarCarro()