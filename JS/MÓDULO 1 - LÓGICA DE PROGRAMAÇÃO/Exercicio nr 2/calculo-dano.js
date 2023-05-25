const charName1 = prompt("Informe o nome do personagem 1:");
const charPowerAttack = prompt("Informe o poder do personagem 1:");

const charName2 = prompt("Informe o nome do personagem 2:");
let charLife2 = prompt("Informe os pontos de vida do personagem 2:");
const charDeffense = prompt("Informe a defesa do personagem");
const charShield = prompt("O personagem possui escudo de defesa?");
let danoCausado = 0;

if (charPowerAttack > charDeffense && charShield === "não") {
  danoCausado = charPowerAttack - charDeffense;
} else if (charPowerAttack > charDeffense && charShield === "sim") {
  danoCausado = (charPowerAttack - charDeffense) / 2;
} else if (charPowerAttack <= charDeffense) {
  danoCausado = 0;
}

charLife2 -= danoCausado;

alert(charName1 + " causou " + danoCausado + " pontos de vida em " + charName2);
alert(
  charName1 +
    "\nPoder de ataque: " +
    charPowerAttack +
    "\n\n" +
    charName2 +
    "\nPontos de vida: " +
    charLife2 +
    "\nPoder de defesa: " +
    charDeffense +
    "\nPossui escudo: " +
    charShield
);
