let menu = "";

function triangulo(base, altura) {
  return (base * altura) / 2;
}

function retangulo(base, altura) {
  return base * altura;
}

function quadrado(lado) {
  return lado ** 2;
}

function trapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function circulo(raio) {
  return raio ** 2 * 3.14;
}

do {
  menu = prompt(
    "Bem vindo a calculadora geométrica. Selecione o cálculo que deseja fazer: \n\n1. Calcular área do triângulo;\n2. Calcular área do retângulo;\n3. Calcular área do quadrado;\n4. Calcular área do trapézio;\n5. Calcular área do círculo;\n6. Sair"
  );

  switch (menu) {
    case "1":
      alert(triangulo(prompt("Informe a base: "), prompt("Informe a altura")));
      break;
    case "2":
      alert(
        retangulo(prompt("Informe a base: "), prompt("Informe a altura: "))
      );
      break;
    case "3":
      alert(quadrado(prompt("Informe o lado: ")));
      break;
    case "4":
      alert(
        trapezio(
          prompt("Informe a base maior: "),
          prompt("Informe a base menor: "),
          prompt("Informe a altura: ")
        )
      );
      break;
    case "5":
      alert(circulo(prompt("Informe o raio: ")));
      break;
    case "6":
      alert("O programa está sendo encerrado.");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
} while (menu !== "6");
