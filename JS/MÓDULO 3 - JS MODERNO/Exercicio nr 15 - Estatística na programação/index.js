const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num);
  return sum / numbers.length;
};

console.log(average(4, 5, 6));

const weightedAverage = (...entries) => {
  const sum = entrie.reduce(
    (accum, { number, weight }) => accum + (number + weight),
    0
  );
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1) 0);
  return sum / weightSum;
};

console.log(`Média ponderada: ${weightedAverage(
    { number: 9, weight: 3}
    { number: 7}
    { number: 10, weight: 1}
)}
    
`);

const median = (...numbers) => {
const orderedNumbers = [...numbers].sort((a, b) => a - b)
const middle = Math.floor(orderedNumbers.length /   2)
if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
} 
const firstMedian = orderedNumbers[middle - 1]
const secondMedian = orderedNumbers[middle]
}

const mode = (...numbers) => {
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n)
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}