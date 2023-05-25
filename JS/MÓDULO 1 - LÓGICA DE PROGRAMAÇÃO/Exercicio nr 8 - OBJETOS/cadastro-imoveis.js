let menu = "";
const imoveis = [];

do {
  menu = prompt(
    "Quantidade de imóveis cadastrados: " +
      "\n" +
      imoveis.length +
      "\n\nEscolha uma das alternativas abaixo: \n" +
      "\n1. Salvar novo imóvel" +
      "\n2. Mostrar todos os imóveis salvos" +
      "\n3. Sair"
  );

  switch (menu) {
    case "1":
      const imovel = {};
      imovel.owner = prompt("Informe o nome do proprietário do imóvel: ");
      imovel.rooms = prompt("Informe a quantidade de quartos: ");
      imovel.bathroom = prompt("Quantidade de banheiros: ");
      imovel.garage = prompt("O imóvel possui garagem?");

      const confirmacao = confirm(
        "Salvar este imóvel? \n" +
          "\nProprietário: " +
          imovel.owner +
          "\nQuantidade de quartos: " +
          imovel.rooms +
          "\nQuantidade de banheiros: " +
          imovel.bathroom +
          "\nPossui garagem? " +
          imovel.garage
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel cadastrado com sucesso.");
      } else {
        alert("Voltando ao menu");
      }

      break;
    case "2":
      for (let i = 0; i < imoveis.length; i += 1) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].owner +
            "\nQuartos: " +
            imoveis[i].rooms +
            "\nBanheiros: " +
            imoveis[i].bathroom +
            "\nPossui garagem? " +
            imoveis[i].garage
        );
      }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida. Escolha uma opção válida.");
      break;
  }
} while (menu !== "3");
