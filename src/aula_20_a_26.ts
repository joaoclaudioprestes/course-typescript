abstract class Conta { // Dizemos que a class Conta é um modelo para criação de contas PF ou PJ
  private readonly numero: number; // Ficou privado e somente para leitura, após a atribuição não será possivel alter o seu valor
  public titular: string;
  private saldoConta: number;

  constructor(titular: string) {
    // Inicialização de valores no construtor
    this.numero = this.contaAleatoria(); // Atribui um número de conta aleatório
    this.titular = titular; // Atribui o titular da conta
    this.saldoConta = 0; // Inicializa o saldo como zero
  }

  private contaAleatoria(): number {
    // Gera um número de conta aleatório
    return Math.floor(Math.random() * 10000) + 1;
  }

  protected info(): void {
    // Método para exibir informações básicas da conta
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
  }

  get saldo(): string {
    // Getter que retorna o saldo formatado como string
    return `Seu saldo é de R$ ${this.saldoConta}`;
  }

  set saldo(novoSaldo: number) {
    // Setter que atualiza o saldo da conta
    this.saldoConta = novoSaldo;
  }

  public depositoConta(valor: number): string {
    // Método para realizar depósito na conta
    this.saldoConta += valor; // Adiciona o valor ao saldo
    return `Depósito no valor de R$ ${valor}, realizado com sucesso! Seu saldo é de R$ ${this.saldoConta}`;
  }

  public saque(valor: number): string {
    // Método para realizar saque na conta
    if (valor <= this.saldoConta) {
      // Verifica se há saldo suficiente para o saque
      this.saldoConta -= valor; // Subtrai o valor do saldo
      return `O valor de R$ ${valor}, foi sacado com sucesso! - O saldo restante é de R$ ${this.saldoConta}`;
    }

    return `Saldo insuficiente! Seu saldo em conta é de R$ ${this.saldoConta}`;
  }
}

class ContaPF extends Conta {
  cpf: number;

  constructor(cpf: number, titular: string) {
    // Construtor da classe filha ContaPF
    super(titular); // Chama o construtor da classe base
    this.cpf = cpf; // Atribui o CPF específico da conta PF
  }

  info() {
    // Método para exibir informações específicas de ContaPF
    console.log("CONTA - PF");
    super.info(); // Chama o método info da classe base
    console.log(`CPF: ${this.cpf}`);
    console.log("------------------------------");
  }
}

class ContaPJ extends Conta {
  cnpj: number;

  constructor(cnpj: number, titular: string) {
    // Construtor da classe filha ContaPJ
    super(titular); // Chama o construtor da classe base
    this.cnpj = cnpj; // Atribui o CNPJ específico da conta PJ
  }

  info() {
    // Método para exibir informações específicas de ContaPJ
    console.log("CONTA - PJ");
    super.info(); // Chama o método info da classe base
    console.log(`CNPJ: ${this.cnpj}`);
    console.log("------------------------------");
  }
}

// Exemplos de utilização
const conta1PF = new ContaPF(1231241324, "Felipe");
const conta1PJ = new ContaPJ(2324324234, "João");

console.log(conta1PF.saldo);
console.log(conta1PF.depositoConta(213));
console.log(conta1PF.saque(241));
console.log(conta1PF.saque(213));

conta1PF.saldo = 250; // Atualizando o saldo usando o setter
console.log(conta1PF.saldo);
