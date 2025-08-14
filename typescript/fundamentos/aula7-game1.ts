// Defininando as classes do personagem
type CharacterClass = "Guerreiro" | "Mago" | "Arqueiro";

// Agora a interface do que todo o personagem deve ter
interface ICharacter {
  name: string;
  level: number;
  hp: number;
  class: CharacterClass;
}

// Grupo de aventureiros
const party: ICharacter[] = [
  { name: "Aragorn", level: 15, hp: 150, class: "Guerreiro" },
  { name: "Gandalf", level: 20, hp: 100, class: "Mago" },
  { name: "Legolas", level: 16, hp: 120, class: "Arqueiro" },
  { name: "Gimlo", level: 15, hp: 151800, class: "Guerreiro" },

  // testando erro no typescript
  // { name: "Frodo", level: 5, healphPoints: 50, class: "Ladino" }
]

console.log("--- Gerenciando o grupo de aventureiros ---");

// desafio 1 - encontrar todos os guerreiros
console.log("\n--- Guierreiros no Grupo ---");
const warriors = party.filter(member => {
  return member.class === "Guerreiro";
});
console.log(warriors);

// desafio 2 - encontrar o mago do grupo
console.log("\n--- Encontrando o mago ---");
const mage = party.find(member => member.class === "Mago");
if (mage) {
  console.log(`${mage.name} é o mago do grupo, nível ${mage.level}`);
}else {
  console.log("Não há nenhum mago no grupo!");
}

// Desafio 3 - Criar um relatório de status para o grupo!
console.log("\n--- Relatório de Status do Grupo ---");
const statusReport = party.map(member => {
  const { name, level, hp } = member;
  return `Nome: ${name} | Nível: ${level} | HP: ${hp}`;
});

statusReport.forEach(reportLine => console.log(reportLine));