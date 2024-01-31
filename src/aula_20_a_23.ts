class Conta {
  protected numero: number; // private = Não podemos acessar se nao for na propria classe pai
  // protected = Podemos utilziar nas classes filhas, mas não externamente...
  public titular: string; // Podemos acessar externamente...

  constructor(titular: string) {
    this.numero = this.contaAleatoria();
    this.titular = titular;
  }

  private contaAleatoria(): number {
    return Math.floor(Math.random() * 10000) + 1;
  }

  protected info(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
  }
}

class ContaPF extends Conta {
  // Definimos a herança de conta....
  cpf: number;

  constructor(cpf: number, titular: string) {
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
  cnpj: number;

  constructor(cnpj: number, titular: string) {
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
