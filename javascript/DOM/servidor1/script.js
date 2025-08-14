const verificarServidor = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
       
            const servidorRespondeu = Math.random() > 0.5;

            if (servidorRespondeu){
                resolve("Servidor está online!");
            }else{
                reject(new Error("Servidor Offline!"));
            };

        }, 3000);

    });
};

const botaoVerificar = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botaoVerificar.addEventListener("click", async () => {
    
    resultado.innerHTML = "<p>Verificando status...</p>";

    try{

        const respostasDoServidor = await verificarServidor();

        resultado.innerHTML = `<p>Sucesso! ${respostasDoServidor}</p>`

    }catch(error){
        resultado.innerHTML = `<p>Falha! ${error.message}</p>`
    };
});