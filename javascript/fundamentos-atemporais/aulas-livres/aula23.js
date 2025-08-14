const minhaPadaria = {
    nome: "Pão Dourado",
    gastosDoMes: 950,
};

const controlarGastos = (padaria) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const { nome, gastosDoMes } = padaria;
            const limiteDeGastos = 1000;
            if (gastosDoMes <= limiteDeGastos){
                resolve(`A padaria ${nome} teve ${gastosDoMes} de gastos e está dentro do limite!`);
            }else{
                reject(`A padaria ${nome} teve ${gastosDoMes} de gastos e está fora do limite de gastos!`);
            }
        }, 3000);
    })
}

const saberLimite = async () => {
    try{
        const resultado = await controlarGastos(minhaPadaria);
        console.log(resultado)
    }catch(erro){
        console.log(erro);
    }
}

saberLimite()