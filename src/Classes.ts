class Pessoas {
  name: string;
  altura: number;

  constructor(name: string, altura: number) {
    this.name = name;
    this.altura = altura;
  }
}

class Objetos {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const tipos_objetos: string[] = ["Cadeira", "mesa", "Caderno"];

// export class Falar extends Pessoa {
//   constructor(name: string, altura: number) {
//     super(name, altura);
//   }
//   Ok(): void {
//     console.log(`Olá, ${this.name}, eu tenho ${this.altura} cm.`);
//   }
// }

export default Pessoas;
export { Objetos, tipos_objetos };
