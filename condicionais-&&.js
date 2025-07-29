console.log("--- gerente durão ---")

// &&

let estoqueDePizza = 10;
let estoqueDeRefri = 25;

if(estoqueDePizza > 0 && estoqueDeRefri > 0){
  console.log("Ótimo! Estamos prontos para abrir o negócio!");
}else{
  console.log("Promoção Combo pausada.");
};

console.log("--- gerente flexivel ---");

// ||

const valorDoPedido = 80.00;
const ehClienteVIP = true;

if(valorDoPedido > 100 || ehClienteVIP === true){
  console.log("Entrega grátis liberada para este pedido!");
}else{
  console.log("Cobrar taxa de entrega de R$5,00.");
};

console.log("--- gerente do contra ---");

// ! (NÃO /NOT)

const maquinaCartaoFunciona = false;

if(!maquinaCartaoFunciona){
  console.log("AVISO: Aceitar apenas pagamento em dinheiro ou PIX!");
};