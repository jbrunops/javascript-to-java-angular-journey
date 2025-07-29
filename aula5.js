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

console.log("--- exercício aula 5 ---");

const dias = {
  dia1: "segunda",
  dia2: "terça",
  dia3: "quarta",
  dia4: "quinta",
  dia5: "sexta",
  dia6: "sábado",
  dia7: "domingo",
};

const feriados = {
  sabado: true,
  domingo: false,
}

const decidirPromocaoDoDia = (diaDaSemana, feriado) => {
  if(diaDaSemana.dia6 || diaDaSemana.dia7){
    console.log("Promoção de Fim de Semana: Pizza em dobro!");
  }else if(feriado.sabado === true){
    console.log("Promoção de Feriado! Refri grátis na compra de qualquer pizza!");
  }else{
    console.log("Hoje sem promoções especiais!");
  };
};

decidirPromocaoDoDia(dias.dia6, false);
decidirPromocaoDoDia(dias.dia1, true);
decidirPromocaoDoDia(dias.dia2, false);