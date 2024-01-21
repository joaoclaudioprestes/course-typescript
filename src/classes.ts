interface IPerson {
  id: number;
  protected name: string;
  age: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number; // Só leitura após receber
  protected name: string; // Faz com que a variável não seja acessada fora da classe
  private age: number; // Só pode ser acessada na classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    return this.age // Não poderá ser acessada por ser privada!
  }
}

const John = new Person(12, "John", 23);
John.id = 34; // Não podemos redefinir devido ao readonly

