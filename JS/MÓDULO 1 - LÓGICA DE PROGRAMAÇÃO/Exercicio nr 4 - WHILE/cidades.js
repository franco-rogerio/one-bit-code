const tourist = prompt("Qual o seu nome? ");
let citiesVisited = "";
let counting = 0;

let continuar = prompt("Você visitou alguma cidade?");

while (continuar === "sim") {
  let cidade = prompt("Qual é o nome da cidade que você visitou?");
  citiesVisited += "- " + cidade + "\n";
  counting++;
  continuar = prompt("Você visitou outra cidade?");
}

alert(
  "Turista: " +
    tourist +
    "\nQuantidade de cidades visitadas: " +
    counting +
    "\nCidades visitadas:\n " +
    citiesVisited
);
