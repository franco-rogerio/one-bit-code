let saldo = prompt("Informe a quantidade de dinheiro inicial: ");
saldo = parseFloat(saldo);
let option = "";

do {
  option = prompt(
    "Saldo disponível: BRL " +
      saldo +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );
  switch (option) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado"));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser removido"));
      break;
    case "3":
      alert("saindo");
      break;
    default:
      alert("opção inválida");
  }
} while (option !== "3");
