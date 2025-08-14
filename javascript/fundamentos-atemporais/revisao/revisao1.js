const trabalharPizzaria = (idade, indicacao) => {
  if (idade >= 18 && indicacao){
    console.log("Ótimo, você pode trabalhar com a gente!");
  }else if (idade >= 18 || indicacao){
    console.log("Você não tem idade, mas acredito que possa trabalhar pela indica~çao!");
  }else{
    console.log("Nada feito!");
  };
};

trabalharPizzaria(19, true);
trabalharPizzaria(15, false);