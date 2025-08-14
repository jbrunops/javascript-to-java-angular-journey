// o banco de dados

const alimentosPermitidos = [
    "Frango",
    "Brócolis",
    "Batata Doce",
    "Salmão",
    "Espinafre"
];

// Laboratório

const verificarAlimento = (alimento) => {
    return new Promise((resolve, reject) => {
        console.log(`Enviando ${alimento} para análise...`);
        const tempoDeAnalise = Math.random() * 2000 + 2000;

        setTimeout(() => {
            if (alimentosPermitidos.includes(alimento.toLowerCase())){
                resolve(`${alimento} é um alimento seguro!`);
            }else{
                reject(new Error(`PERIGO! ${alimento} tem alto índice glicêmico!`));
            }
        }, tempoDeAnalise);
    });
};

const btnVerificar = document.querySelector('#btn-verificar');
const divResultado = document.querySelector('#resultado');

btnVerificar.addEventListener('click', async () => {
    const refeicao = ["Frango", "Brócolis", "Batata Doce"];
    divResultado.innerHTML = "<p>Analisando todos os ingredientes ao mesmo tempo...</p>"

    const arrayDePromessas = refeicao.map(item => verificarAlimento(item));
    console.log("Malote de promessas enviado para o laboratório:", arrayDePromessas);

    try{

        const resultados = await  Promise.all(arrayDePromessas);

        console.log("Resultados individuais:", resultados);
        divResultado.innerHTML = `
            <p class="sucesso">Refeição Aprovada!</p>
            <ul>
                <li>${resultados[0]}</li>
                <li>${resultados[1]}</li>
                <li>${resultados[2]}</li>
            </ul>
        `

    }catch(error){
        console.error(error.message);
        divResultado.innerHTML = `<p class="falha">${error.message}</p>`;
    }
})