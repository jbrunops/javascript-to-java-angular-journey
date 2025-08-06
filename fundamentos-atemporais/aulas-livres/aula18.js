const producao = (estoque, vendas) => {
  return new Promise((resolve, reject) => {
    
    console.log("O gerente: 'O dia acabou! Preciso analisar os relatórios'");
    
    setTimeout(() => {

      const totalVendido = {};

      vendas.forEach(venda => {
        if (!totalVendido[venda.sabor]){
          totalVendido[venda.sabor] = 0;
        }
        totalVendido[venda.sabor] += venda.quantidade;
      });

      let saborMaisVendido = '';
      let maiorVenda = 0;
      for (const sabor in totalVendido){
        if( totalVendido[sabor] > maiorVenda){
          maiorVenda = totalVendido[sabor];
          saborMaisVendido = sabor;
        }
      }

    })
  })
}