const word = prompt("Informe uma palavra para verificação:");
let invertedWord = "";

for (let i = word.length - 1; i >= 0; i -= 1) {
  invertedWord += word[i];
}

if (word === invertedWord) {
  alert(word + " é um palíndromo!");
} else {
  alert(word + " não é um palíndromo! \n\n" + word + " !== " + invertedWord);
}
