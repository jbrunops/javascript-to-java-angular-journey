interface IPizza {
  sabor: string;
  tamanho: 'média' | 'grande';
  preco: number;
  assar(): void;
};

class Forno implements IPizza {
  public sabor: string;
  public tamanho: 'média' | 'grande';
  public preco: number;

  private temperatura: number;

  constructor(saborInicial: string, tamanhoInicial: 'média' | 'grande', precoInicial: number){
    console.log(`Montando uma nova pizza de ${saborInicial}...`);
    this.sabor = saborInicial;
    this.tamanho = tamanhoInicial;
    this.preco = precoInicial;
    this.temperatura = 0;
  };

  public aquecer(){
    this.temperatura = 250;
    console.log(`Forno para a pizza de ${this.sabor} aquecido a ${this.temperatura}ªC`);
  };

  public assar(): void {
    if (this.temperatura >= 250) {
      console.log(`Assando a pizza de ${this.sabor} (${this.tamanho})... Pronta!`);
    }else {
      console.log(`ALERTA! O forno para a pizza de ${this.sabor} est[a frio! Aqueça antes!`);
    };
  }
};

console.log("--- Início do expediente ---");

const pedidoDaMesa1 = new Forno("Calabresa", "grande", 55.40);
const pedidoDaMesa2 = new Forno("Margherita", "média", 48.03);

console.log("\n--- Preparando Pedido 1 ---");

pedidoDaMesa1.aquecer();
pedidoDaMesa2.assar();

console.log("\n--- Preparando Pedido 2 ---");

pedidoDaMesa2.assar();
pedidoDaMesa2.aquecer();
pedidoDaMesa2.assar();

console.log(`\nPreço do primeiro pedido: R$ ${pedidoDaMesa1.preco}`);