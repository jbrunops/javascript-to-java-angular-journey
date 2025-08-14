const pedidos = [
  { id: 1, cliente: "Ana", pizza: "Calabresa", status: "Pendente" },
  { id: 2, cliente: "Bruno", pizza: "4 Queijos", status: "Pendente" },
  { id: 3, cliente: "Carla", pizza: "Frango com Catupiry", status: "Pronto" },
  { id: 4, cliente: "Daniel", pizza: "Marguerita", status: "Pendente" },
];

const containerDePedidos = document.querySelector('#pedidos-container');

function renderizarPedidos(listaDePedidos){
  containerDePedidos.innerHTML = '';

  const htmlDosPedidos = listaDePedidos.map(pedido => {
    return `
      <div class="pedido ${pedido.status.toLowerCase()}">
        <h3>Pedido #${pedido.id} - Cliente: ${pedido.cliente}</h3>
        <p>Pizza: ${pedido.pizza}</p>
        <p>Status: ${pedido.status}</p>
      </div>
    `;
  }).join('');
  containerDePedidos.innerHTML = htmlDosPedidos;
}

renderizarPedidos(pedidos);
