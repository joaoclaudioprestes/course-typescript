class Pessoas {
    name;
    altura;
    constructor(name, altura) {
        this.name = name;
        this.altura = altura;
    }
}
class Objetos {
    name;
    constructor(name) {
        this.name = name;
    }
}
const tipos_objetos = ["Cadeira", "mesa", "Caderno"];
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
