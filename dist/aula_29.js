"use strict";
// <G> -> Generics
function f_teste(v) {
    // Função Generics -
    return v;
}
console.log(f_teste(3)); // Passamos o tipo do valor que será utilizado na função generics
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
    consoleTest() {
        console.log(this.valor);
    }
}
const teste_C = new C_teste(3);
const teste_A = new C_teste("Ok");
teste_A.consoleTest();
teste_C.consoleTest();
