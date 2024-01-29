let cursos: string[] = ["Javascript", "PHP", "MySQL", "Java"]; // specifying the type of the array
let valuesNumbers: number[] = [12, 23, 43];
let ages: (number | boolean)[] = [false, 18, true, 19]; // union in typescript - or for type diversity we use "any"

cursos.push("TypeScript");
valuesNumbers.push(19);

console.log(cursos);
console.log(valuesNumbers);
