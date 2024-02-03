"use strict";
// Namespace é uma forma de organizar o conteúdo
class Carro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
var Motores;
(function (Motores) {
    class Motor extends Carro {
        potencia;
        constructor(nome, potencia) {
            super(nome);
            this.potencia = potencia;
        }
        velocidade() {
            console.log(`A velocidade do ${this.nome} - Sua potência é de ${this.potencia}`);
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Carro("V6");
// Exemplo de uso do namespace Motores
const motorCarro1 = new Motores.Motor("MotorV6", 300);
motorCarro1.velocidade();
