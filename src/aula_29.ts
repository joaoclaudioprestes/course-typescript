// <G> -> Generics
function f_teste<T>(v: T): T {
  // Função Generics -
  return v;
}

console.log(f_teste<number>(3)); // Passamos o tipo do valor que será utilizado na função generics

class C_teste<T> {
  public valor: T;
  constructor(valor: T) {
    this.valor = valor;
  }

  consoleTest(): void {
    console.log(this.valor);
  }
}

const teste_C = new C_teste<number>(3);
const teste_A = new C_teste<string>("Ok");

teste_A.consoleTest();
teste_C.consoleTest();
