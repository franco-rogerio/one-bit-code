const measure = prompt("Insira a medida: ");
const comprimento = prompt(
  "Insira a medida para a qual deseja converter: " +
    "\nmm" +
    "\ncm" +
    "\ndm" +
    "\ndam" +
    "\nhm" +
    "\nkm"
);

switch (comprimento) {
  case "mm":
    alert("Resultado: " + measure * 1000 + "mm");
    break;
  case "cm":
    alert("Resultado: " + measure * 100 + "cm");
    break;
  case "dm":
    alert("Resultado: " + measure * 10 + "dm");
    break;
  case "dam":
    alert("Resultado: " + measure / 10 + "dam");
    break;
  case "hm":
    alert("Resultado: " + measure / 100 + "hm");
    break;
  case "km":
    alert("Resultado: " + measure / 1000 + "km");
    break;
  default:
    alert("Opção inválida");
}
