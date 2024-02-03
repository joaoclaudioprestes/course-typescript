// Namespace é uma forma de organizar o conteúdo
class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

namespace Motores {
  export class Motor extends Carro {
    potencia: number;

    constructor(nome: string, potencia: number) {
      super(nome);
      this.potencia = potencia;
    }

    velocidade(): void {
      console.log(
        `A velocidade do ${this.nome} - Sua potência é de ${this.potencia}`
      );
    }
  }
}

const carro1 = new Carro("V6");
// Exemplo de uso do namespace Motores
const motorCarro1 = new Motores.Motor("MotorV6", 300);

motorCarro1.velocidade();
