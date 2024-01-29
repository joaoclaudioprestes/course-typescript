let numbers: number[] = [12, 15, 16, 17, 18];
// let numbersTwo: Array<number> = [120, 31, 32, 33, 34];

console.log(numbers.push(20));
console.log(numbers.pop());
console.log(numbers.includes(16));

let numbersTwo: ReadonlyArray<number> = [12, 32, 412] // Somente para leitura, não é possivel alterarmos os valores após sua definição...