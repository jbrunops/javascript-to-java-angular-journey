interface IOrder {
  orderId: number;
  customerName: string;
  value: number;
  isPaid: boolean;
};

const firstOrder: IOrder = {
  orderId: 101,
  customerName: "Luciano Silva",
  value: 89.20,
  isPaid: false
};

console.log(`Pedido #${firstOrder.orderId} do cliente ${firstOrder.customerName}`);

const orderQueue: IOrder[] = [
  { orderId: 201, customerName: "Felipe", value: 45, isPaid: true },
  { orderId: 202, customerName: "Sandra", value: 123, isPaid: false },
  { orderId: 203, customerName: "Marlí", value: 32, isPaid: true },
];

const report = orderQueue.map(pedido => {
  const status = pedido.isPaid ? "Pago" : "Aguardando pagamento";
  return `Pedido #${pedido.orderId} (${pedido.customerName}) - Status: ${status}`;
});

console.timeLog("\n--- Relatório de Pedidos do dia ---");
console.log(report);