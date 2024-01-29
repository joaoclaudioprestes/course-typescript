class Curso {
  canal = null;
  curso = null;
  constructor(canal: any, curso: any) {
    this.canal = canal;
    this.curso = curso;
  }
}

let c1 = new Curso("Testando", "Typescript");

console.log(c1);
console.log(c1.curso);
console.log(c1.canal);
