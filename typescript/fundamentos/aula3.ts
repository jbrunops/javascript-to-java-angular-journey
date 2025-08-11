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
