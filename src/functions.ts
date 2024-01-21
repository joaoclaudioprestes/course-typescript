// Função e Interface
interface MathFunc {
  (x: number, y: number): number; // Definimos o que essa função irá retornar
}

const math: MathFunc = (x: number, y: number): number => {
  return x + y;
};

const sum = (x: number, y: number): number | string => {
  // Podemos defir o tipo que será o retorno da função...
  return (x + y).toString(); // podemos alterar o resultado do retorno da função...
};

const myName = (lastName: string) => {
  console.log(`Meu nome é João ${lastName}`);
};

const log = (message: string): void => {
  // Void é uma função que não vai retornar nada! :) - Não tem retorno...
  console.log(message);
};


console.log(math(12,34))
myName("Prestes");
console.log(sum(30, 12));
