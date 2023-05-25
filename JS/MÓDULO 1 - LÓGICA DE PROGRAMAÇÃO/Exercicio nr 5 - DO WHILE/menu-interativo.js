let option = "";

do {
  option = prompt(
    "Seja bem-vindo!" +
      "\nEscolha qual das opções abaixo deseja: " +
      "\n1 - opção um" +
      "\n2 - opção dois" +
      "\n3 - opção três" +
      "\n4 - opção quatro" +
      "\n5 - Encerrar"
  );

  switch (option) {
    case "1":
      alert("Opção 1 escolhida");
      break;
    case "2":
      alert("Opção 2 escolhida");
      break;
    case "3":
      alert("Opção 3 escolhida");
      break;
    case "4":
      alert("Opção 4 escolhida");
      break;
    case "5":
      alert("Você escolheu encerrar");
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "5");
