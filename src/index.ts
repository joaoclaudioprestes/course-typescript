// Tipos Básicos
let age: number = 19;
const firstName: string = "João C. Prestes";
const isValid: boolean = true;
let idk: any = 5; // Podemos alterar seu valor... Buscar nunca usar!

idk = 5;
idk = "5";

const ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Para definir o array colocar "tipo[]"
const booleans: boolean[] = [true, false, false, true, false];
const names: string[] = ["joão", "felipe", "diogo"];

//Tuplas
const person: [number, string] = [19, "joão"];

// Lista de Tuplas
type Pessoa = [number, string];

const peoples: Pessoa[] = [
  [19, "João"],
  [29, "Felipe"],
];

// Intersections
const productId: string | number | boolean = false; // Podemos definir um tipo ou outro...

// Enum - um valor que sempre sera referenciado em outro valor...
enum Direction {
  Up = 1,
  Dow = 2,
  Left = "Esquerda",
}

const direction = Direction.Up;

// Type Assertions - Alterar o tipo de uma variável
const productName: any = "Bone";

// let itemId = productName as string;
let itemId = <string>productName; // usar como normalmente...


