"use strict";
class Conta {
    numero; // private = Não podemos acessar se nao for na propria classe pai
    // protected = Podemos utilziar nas classes filhas, mas não externamente...
    titular; // Podemos acessar externamente...
    constructor(titular) {
        this.numero = this.contaAleatoria();
        this.titular = titular;
    }
    contaAleatoria() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
}
class ContaPF extends Conta {
    // Definimos a herança de conta....
    cpf;
    constructor(cpf, titular) {
        super(titular); // Faz referencoia a classe pai
        this.cpf = cpf;
    }
    info() {
        console.log("CONTA - PF");
        super.info(); // Pega o valor protectd info e podemos utilizar na classe filha
        console.log(`CNPJ: ${this.cpf}`);
        console.log("------------------------------");
    }
}
class ContaPJ extends Conta {
    // Outra herança....
    cnpj;
    constructor(cnpj, titular) {
        super(titular); // Faz referencia a classe pai
        this.cnpj = cnpj;
    }
    info() {
        console.log("CONTA - PJ");
        super.info(); // Pega o valor protectd info e podemos utilizar na classe filha
        console.log(`CNPJ: ${this.cnpj}`);
        console.log("------------------------------");
    }
}
const conta1PF = new ContaPF(1231241324, "Felipe");
const conta1PJ = new ContaPJ(2324324234, "João");
conta1PF.info();
conta1PJ.info();
