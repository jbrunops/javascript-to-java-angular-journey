console.log("--- Sistema de Bônus para funcionários ---");

const funcionario1 = {
  nome: "Lucas",
  metaBatida: true,
  vendas: 2000,
};

const funcionario2 = {
  nome: "Pedro",
  metaBatida: false,
  vendas: 1450,
};

const calcularBonus = (funcionario) => {
  console.log(`Analisando o bônus para: ${funcionario.nome}`);

  if(funcionario.metaBatida && funcionario.vendas > 3000){
    console.log("Bônus Ouro! Receberá 10% sobre as vendas!");
  }else if(funcionario.metaBatida || funcionario.calcularBonus > 3500){
    console.log("Bônus Prata! Receberá 5% sobre as vendas!");
  }else{
    console.log("Sem bônus este mês!");
  };
};

calcularBonus(funcionario1);
calcularBonus(funcionario2);
