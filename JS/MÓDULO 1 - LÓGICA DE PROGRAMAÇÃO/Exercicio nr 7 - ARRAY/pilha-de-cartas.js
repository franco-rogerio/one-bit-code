let opcao = "";
let baralho = [];

do {
  opcao = prompt(
    "Quantidade de cartas no baralho: " +
      baralho.length +
      "\nEscolha uma das opções abaixo:\n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const addCard = prompt("Qual o nome da carta que deseja adicionar?");
      baralho.unshift(addCard);
      break;
    case "2":
      const pickCard = baralho.shift();
      if (!baralho) {
        alert("Não há nenhuma carta no baralho");
      } else {
        alert("Você retirou um(a) " + pickCard);
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida! Tente novamente.");
      break;
  }
} while (opcao !== "3");
