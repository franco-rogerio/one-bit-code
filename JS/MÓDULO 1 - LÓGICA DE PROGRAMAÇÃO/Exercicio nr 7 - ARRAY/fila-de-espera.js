//Menu interativo com lista dos pacientes esperando em ordem e ao lado do nome deve mostrar a posição;
//Opção novo paciente (add no fim da lista)
//Consultar paciente, retira o primeiro nome da fila e mostra na tela o nome do paciente
//sair

let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i += 1) {
    pacientes += +"º - " + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;
    case "3":
      alert("Encerrado.");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
