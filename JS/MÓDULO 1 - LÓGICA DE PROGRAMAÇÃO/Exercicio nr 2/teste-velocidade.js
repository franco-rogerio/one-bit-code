const nameCar1 = prompt("O nome do carro é ");
const speedCar1 = prompt("A velocidade do carro é ");

const nameCar2 = prompt("O nome do carro é ");
const speedCar2 = prompt("A velocidade do carro é ");

if (speedCar1 > speedCar2) {
  alert("A velocidade do " + nameCar1 + " " + " é maior que a do " + nameCar2);
} else if (speedCar2 > speedCar1) {
  alert("A velocidade do " + nameCar2 + " " + " é maior que a do " + nameCar1);
} else {
  alert(
    "As velocidades do " + nameCar1 + " e do " + nameCar2 + " " + "são iguais"
  );
}
