const btnVerificar = document.getElementById('btn-verificar');
const divResultado = document.getElementById('resultado');

const verificarServidor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const servidorRespondeu = Math.random() > 0.5;
            if(servidorRespondeu){
                resolve("Servidor está ONLINE!");
            }else{
                reject(new Error("Servidor está OFFLINE!"));
            }
        }, 3000);
    });
};

btnVerificar.addEventListener('click', async () => {
    divResultado.innerHTML = "<p>Verificar status...</p>";

    try{
        const respostaDoServidor = await verificarServidor();
        divResultado.innerHTML = `<p class="sucesso">${respostaDoServidor}</p>`;
    }catch(erro){
        divResultado.innerHTML = `<p class="falha">${erro.message}</p>`;
    };
});
