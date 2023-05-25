// **************EXERCICIO #1 ***************

// let number;

// do {
//   number = prompt("Digite um número qualquer:");
// } while (number % 2 == 1);

// **************EXERCICIO #2 ***************

// let guess;
// let magicNumber = Math.floor(Math.random() * 100) + 1;

// do {
//   guess = Number(prompt("Adivinhe o número entre 1 e 100: "));

//   if (guess < magicNumber) {
//     alert("O número a ser adivinhado é maior do que o informado.");
//   } else if (guess > magicNumber) {
//     alert("O número a ser adivinhado é menor do que o informado.");
//   } else {
//     alert("Parabéns, você adivinhou o número");
//     break;
//   }
// } while (guess !== magicNumber);

// **************EXERCICIO #3 ***************

// let password = 12345;
// let digiteSenha;

// do {
//   digiteSenha = Number(prompt("Digite a sua senha: "));
//   if (password === digiteSenha) {
//     alert("Senha correta! Acesso liberado.");
//   } else {
//     alert("Senha incorreta. Tente novamente!");
//   }
// } while (digiteSenha !== password);

// **************EXERCICIO #4 ***************

// let digitePalavra;

// do {
//   digitePalavra = prompt("Digite uma palavra: ");
// } while (digitePalavra[0] !== "A");

// **************EXERCICIO #5 ***************

// let number;

// do {
//   number = prompt("Digite um número: ");
//   number = Math.floor(number.replace(",", "."));
// } while (isNaN(number) || number < 1 || number > 10);

// ****RESPOSTA CHATGPT****

// let number;

// do {
//   number = prompt("Digite um número inteiro entre 1 e 10:");

//   // Substitui vírgula por ponto e arredonda para o inteiro mais próximo
//   number = Math.floor(number.replace(',', '.'));

// } while (isNaN(number) || number < 1 || number > 10);

// console.log("Número digitado: " + number);

// *****************
